<template>
  <v-card>
    <v-card-title v-if="!hasImg" class="primary text-h5 white--text">
      {{ project.name }}
    </v-card-title>
    <v-img
      v-else
      lazy-src="../assets/back_to_the_party.png"
      src="../assets/back_to_the_party.png"
    ></v-img>
    <v-list>
      <v-list-item :href="project.videoLink" target="_blank">
        <v-list-item-icon>
          <v-icon color="red">
            mdi-youtube
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ project.videoLinkPlaceHolder }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :href="project.githubRepo" target="_blank">
        <v-list-item-icon>
          <v-icon color="purple">
            mdi-github
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Link to the github repo
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-subheader>Description</v-subheader>
      <v-list-item>
        <v-list-item-content clas="pa-0">
          <span class="mt-0">
            {{ project.description }}
          </span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data: () => ({}),
  computed: {
    hasImg() {
      return this.project.img.length > 0;
    },
  },
};
</script>
