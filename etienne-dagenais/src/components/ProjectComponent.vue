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
    <v-list class="pa-0 ma-0">
      <v-list-item :href="project.videoLink" target="_blank">
        <v-list-item-icon>
          <v-icon color="red"> mdi-youtube </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ project.videoLinkPlaceHolder }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :href="project.githubRepo" target="_blank">
        <v-list-item-icon>
          <v-icon color="purple"> mdi-github </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Link to the github repo </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="project.hasAdditionalLink"
        :href="project.additionalLink"
        target="_blank"
      >
        <v-list-item-icon>
          <v-icon>mdi-link</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{
            project.additionalLinkPlaceHolder
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text class="text-body-1 black--text">
      <v-subheader class="ma-0 pa-0">Description</v-subheader>

      <div class="ml-2">
        <span>{{ project.description }}</span>
      </div>
      <v-subheader class="ma-0 pa-0">My role</v-subheader>

      <div class="ml-2">
        <span>{{ project.myRole }}</span>
      </div>

      <template v-if="project.notice != null && project.notice.length > 0">
        <v-subheader class="ma-0 pa-0">Please note</v-subheader>
        <div class="ml-2">
          <span>{{ project.notice }}</span>
        </div>
      </template>
    </v-card-text>
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
