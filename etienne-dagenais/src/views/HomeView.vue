<template>
  <v-card class="mx-auto mt-12" max-width="1200">
    <v-container fluid fill-height>
      <v-col cols="6">
        <v-avatar size="500" class="">
          <v-img src="../assets/pres_photo.jpg" />
        </v-avatar>
      </v-col>
      <v-col cols="6">
        <h2>
          Hi, I'm a software developper/game developper. I will soon graduate a
          bachelor degree in computer science at Sherbooke University. I really
          enjoy learning new technologies and creating things.
        </h2>
        <v-divider class="my-5" />
        <v-list class="float-center">
          <v-list-item to="/work">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Checkout my work experience
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="primary"> mdi-arrow-right </v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item to="/projects">
            <v-list-item-content>
              <v-list-title class="text-h5">
                Learn about my projects
              </v-list-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon medium color="primary"> mdi-arrow-right </v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item to="/contact">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Contact me
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="primary"> mdi-arrow-right </v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
