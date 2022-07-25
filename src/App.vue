<template>
  <v-app>
    <header-component></header-component>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data: () => ({}),
  mounted() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
