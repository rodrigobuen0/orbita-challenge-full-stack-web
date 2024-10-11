<template>
  <div class="header">
    <h1 class="text-center">Consulta de Alunos</h1>
    <div class="search-container">
      <v-text-field
        v-model="search"
        placeholder="Buscar aluno..."
        prepend-icon="mdi-magnify"
        class="mr-2"
        solo
        hide-details
        style="flex-grow: 1; max-width: 400px;"
      ></v-text-field>
      <v-btn prepend-icon="mdi-pencil" color="#1b2731" @click="goToCreatePage">Cadastrar Aluno</v-btn>
    </div>
  </div>

  <v-data-table
    :headers="headers"
    :items="filteredStudents"
    class="elevation-1"
  >
    <template v-slot:[`item.actions`]="{ item }">
      <div class="action-buttons">
        <v-btn prepend-icon="mdi-pencil" class="btn-edit" @click="goToEditPage(item)">Editar</v-btn>
        <v-btn prepend-icon="mdi-delete" class="btn-delete" @click="confirmDelete(item)">Excluir</v-btn>
      </div>
    </template>

    <template v-slot:[`item.cpf`]="{ item }">
      <span>{{ formatCPF(item.cpf) }}</span>
    </template>
  </v-data-table>

  <confirmation-dialog
    v-if="showConfirm"
    :title="'Confirmar Exclusão'"
    :message="'Tem certeza que deseja excluir este aluno?'"
    @confirm="deleteStudent"
    @cancel="showConfirm = false"
  ></confirmation-dialog>
</template>

<script>
import { getStudents, deleteStudent } from '../services/api';
import ConfirmationDialog from '../components/ConfirmationDialog.vue';

export default {
  components: { ConfirmationDialog },
  data() {
    return {
      students: [],
      search: '',
      headers: [
        { title: 'Registro Acadêmico', value: 'ra', sortable: true },
        { title: 'Nome', value: 'name', sortable: true },
        { title: 'Email', value: 'email', sortable: true },
        { title: 'CPF', value: 'cpf', sortable: true },
        { title: 'Ações', value: 'actions', sortable: false },
      ],
      showConfirm: false,
      studentToDelete: null,
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student => {
        const searchTerm = this.search.toLowerCase();
        return (
          student.ra.toLowerCase().includes(searchTerm) ||
          student.name.toLowerCase().includes(searchTerm) ||
          student.email.toLowerCase().includes(searchTerm) ||
          student.cpf.toLowerCase().includes(searchTerm)
        );
      });
    },
  },
  methods: {
    fetchStudents() {
      getStudents()
        .then(response => {
          this.students = response;
        })
        .catch(error => {
          console.error('Erro ao buscar alunos:', error);
        });
    },
    goToCreatePage() {
      this.$router.push('/students/create');
    },
    goToEditPage(item) {
      this.$router.push(`/students/edit/${item.id}`);
    },
    confirmDelete(student) {
      this.studentToDelete = student;
      this.showConfirm = true;
    },
    deleteStudent() {
      deleteStudent(this.studentToDelete.id)
        .then(() => {
          this.fetchStudents();
          this.showConfirm = false;
        })
        .catch(error => {
          console.error('Erro ao excluir aluno:', error);
        });
    },
    formatCPF(cpf) {
      return cpf.replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    },
  },
  mounted() {
    this.fetchStudents();
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
}
.text-center {
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
}

.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.mr-2 {
  margin-right: 8px;
}

.v-text-field {
  flex-grow: 1;
  max-width: 400px;
}

.btn-edit {
  background-color: #00a0a6;
  color: #fff;
}

.btn-delete {
  background-color: #ff203b;
  color: #fff;
}

.action-buttons {
  display: flex;
  align-items: center;
}

.action-buttons .v-btn {
  margin-right: 8px;
}

.action-buttons .v-btn:last-child {
  margin-right: 0;
}

@media (max-width: 550px) {
  .search-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .v-text-field {
    width: 100%;
    margin-bottom: 8px;
  }

  .mr-2 {
    margin-right: 0;
  }
  
  .search-container v-btn {
    width: 100%;
  }

  .action-buttons {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .action-buttons .v-btn {
    width: auto;
    margin-right: 4px;
  }
}
</style>
