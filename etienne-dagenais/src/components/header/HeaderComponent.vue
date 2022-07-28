<template>
  <v-app-bar app>
    <type-writer-text text="Étienne Dagenais" speed="100" />
    <v-spacer />
    <template v-slot:extension>
      <v-tabs v-model="currentTab" fixed-tabs>
        <v-tab v-for="tab in tabs" :key="tab.text" :to="tab.link">
          {{ tab.text }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import TypeWriterText from "../TypeWriterText.vue";
export default {
  components: {
    TypeWriterText,
  },
  data: () => ({
    currentTab: "tab-Home",
    tabs_exp: ["Home", "Work", "Project", "Contact"],
    tabs: [
      {
        text: "Home",
        link: "/home",
      },
      {
        text: "Work",
        link: "/work",
      },
      {
        text: "Project",
        link: "/projects",
      },
      {
        text: "Contact",
        link: "/contact",
      },
    ],
  }),
};
</script>
