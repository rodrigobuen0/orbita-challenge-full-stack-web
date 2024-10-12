<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>

<style>
html, body, #app {
  height: 100%;
}

.v-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b2731;
}
</style>
