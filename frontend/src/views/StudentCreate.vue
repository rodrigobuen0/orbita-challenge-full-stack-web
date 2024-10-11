<template>
  <h1 class="text-center">Cadastro de Aluno</h1>

  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field 
            label="Nome" 
            v-model="student.name" 
            :rules="[v => !!v || 'Nome é obrigatório']" 
            required
            clearable
            :maxlength="500"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field 
            label="Email" 
            v-model="student.email" 
            :rules="[v => !!v || 'Email é obrigatório', v => /.+@.+\..+/.test(v) || 'Email inválido']" 
            required
            clearable
            :maxlength="100"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field 
            label="Registro acadêmico" 
            v-model="student.ra" 
            :rules="[v => !!v || 'Registro acadêmico é obrigatório']" 
            required
            clearable
            :maxlength="10"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field 
            label="CPF" 
            v-model="student.cpf" 
            :rules="[v => !!v || 'CPF é obrigatório']" 
            required
            clearable
            v-mask="'###.###.###-##'" 
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-alert v-if="errorMessage" type="error" dismissible>
      {{ errorMessage }}
    </v-alert>

    <div class="button-container">
      <v-btn class="btn-cancel" @click="cancel">Cancelar</v-btn>
      <v-btn 
        class="btn-save" 
        @click="save" 
        :disabled="!valid" 
      >
        Salvar
      </v-btn>
    </div>
  </div>
</template>

<script>
import { addStudent } from '../services/api';
import { mask } from 'vue-the-mask';

export default {
  data() {
    return {
      valid: false,
      student: {
        ra: '',
        name: '',
        email: '',
        cpf: '',
      },
      errorMessage: '',
    };
  },
  directives: {
    mask
  },
  methods: {
    save() {
      this.errorMessage = '';
      if (this.$refs.form.validate()) {
        this.student.cpf = this.student.cpf.replace(/\D/g, '');
        addStudent(this.student)
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            if (error.response && error.response.data) {
              console.log(error.response);
              this.errorMessage = error.response.data || 'Erro ao criar aluno.';
            } else {
              this.errorMessage = 'Erro ao criar aluno. Tente novamente mais tarde.';
            }
          });
      }
    },
    cancel() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

.v-text-field {
  margin-bottom: 16px;
}

.btn-cancel {
  background-color: #ff203b;
  color: white;
  margin-right: 8px;
}

.btn-save {
  background-color: #3f51b5;
  color: white;
}

.btn-cancel:hover {
  background-color: #d12e3f;
}

.btn-save:hover {
  background-color: #5c6bc0;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
