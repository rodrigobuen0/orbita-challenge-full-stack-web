<template>
  <v-app>
    <SidebarComponent />

    <v-main>
      <v-container fluid class="main-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';

export default {
  name: 'App',
  components: {
    SidebarComponent,
  },
};
</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
}

.v-main {
  background-color: #e1e1e1;
  height: 100vh;
}

.main-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  height: calc(100% - 40px);
  overflow: auto;
  width: auto !important;
}
</style>
