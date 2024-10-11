<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline text-center">{{ title }}</v-card-title>
      <v-card-text class="text-center">{{ message }}</v-card-text>
      <v-card-actions class="button-container">
        <v-spacer></v-spacer>
        <v-btn class="btn-cancel" @click="cancel">Cancelar</v-btn>
        <v-btn class="btn-confirm" @click="confirm">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    cancel() {
      this.dialog = false;
      this.$emit('cancel');
    },
    confirm() {
      this.dialog = false;
      this.$emit('confirm');
    },
  },
};
</script>

<style scoped>
.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.text-center {
  text-align: center;
  margin: 16px 0;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.btn-cancel {
  background-color: #3f51b5;
  color: white;
  margin-right: 8px;
}

.btn-confirm {
  background-color: #ff203b;
  color: white;
}

.btn-cancel:hover {
  background-color: #5c6bc0;
}

.btn-confirm:hover {
  background-color: #d12e3f;
}
</style>
