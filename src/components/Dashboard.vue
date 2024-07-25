<template>
  <v-container>
    <h1>Hola a todos jeje</h1>
  </v-container>
</template>

<script>

export default {
  name: 'Dashboard-card',
  data() {
    return {
      permission: null,
      value: null,
      currentPage: null,
    };
  },
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style scoped>
.larger-text {
  font-size: 15px;
  margin-top: 20px;
}

.v-bottom-navigation {
  box-shadow: none !important;
  border: none !important;
}

.active-divider {
  border-color: var(--v-primary-base);
  border-width: 3px;
}

</style>
