<template>
  <v-app-bar app color="primary" dark elevate-on-scroll>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-img src="../assets/grupoa.png" max-width="150" contain></v-img>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app dark :mini-variant="miniVariant" :clipped="clipped"
    :expand-on-hover="expandOnHover" :permanent="!$vuetify.display.mobile" color="blue-grey darken-4">
    
    <v-toolbar-title class="app-title">Módulo Acadêmico</v-toolbar-title>

    <v-divider></v-divider>
    <v-list dense>
      <v-list-item @click="goToStudents" prepend-icon="mdi-account-group" title="Lista de Alunos"
        value="studentsList"></v-list-item>
    </v-list>
    
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="logout" prepend-icon="mdi-logout" class="btn-logout text-white">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>


<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: false,
      clipped: false,
      expandOnHover: true,
    };
  },
  methods: {
    goToStudents() {
      this.$router.push('/');
    },
    logout() {
      localStorage.removeItem('authToken');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.v-app-bar {
  background-color: #1b2731 !important;
}

.v-navigation-drawer {
  background-color: #1b2731 !important;
}

.app-title {
  text-align: center;
  margin: 16px 0;
  font-weight: bold;
  font-size: 1.5em;
}

.btn-logout {
  background-color: #ff203b;
}

</style>
