<template>
  <v-app style="background-color: white">
    <AppNavigation v-if="!['login'].includes($route.name)"></AppNavigation>
    <v-main>
      <router-view />
      <router-link to="/dashboard"></router-link>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
  },
  data: () => ({
    //
  }),
  methods: {
  },
  async mounted() {
  },
};
</script>

<style>
.primary--text-GM {
  font-family: "Ubuntu", sans-serif;
  color: var(--v-primary-base);
  font-size: 40px;
}
.title-text-GM {
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
}
.user-text {
  font-size: 15px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
}
</style>
