<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="justify-center d-flex">
            <v-img src="../assets/grupoa.png" max-width="150" contain></v-img>
          </v-card-title>
          <v-card-title class="justify-center d-flex">Módulo Acadêmico</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
              <v-text-field v-model="password" label="Senha" required type="password"></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
              <v-alert v-if="error" type="error" dismissible class="mt-4">
                {{ error }}
              </v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-col class="demo-credentials" cols="12">
              <p>
                Email: <strong>admin@admin.com</strong> | Senha: <strong>Admin123!</strong>
              </p>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { login } from '../services/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const userData = await login(this.email, this.password);
        localStorage.setItem('authToken', JSON.stringify(userData));
        this.$router.push('/');
      } catch (error) {
        this.error = 'Falha ao fazer login. Verifique suas credenciais.';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-logo {
  width: 100px;
  height: auto;
}

.demo-credentials {
  background-color: #e0f3fa;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  width: 100%;
}

.demo-credentials p {
  margin: 0;
  font-size: 16px;
  color: #006d79;
}

v-btn {
  margin-top: 16px;
}
</style>
