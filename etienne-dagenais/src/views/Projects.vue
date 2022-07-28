<template>
  <v-container fluid>
    <v-row>
      <v-col cols="5">
        <project :project="projects[0]" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Project from "../components/Project.vue";
export default {
  components: { Project },
  name: "Projects",
  data: () => ({
    projects: [
      {
        name: "Back to the party",
        img: "../assets/back_to_the_party.png",
        videoLinkPlaceHolder: "Link to the game prototype trailer.",
        videoLink:
          "https://www.youtube.com/watch?v=Iis4ApgzBMo&ab_channel=FabioProvencher",
        githubRepo:
          "https://github.com/dovakin7/Projet-Ubisoft/tree/main/Projet%20Ubisoft",
        description:
          "Back to the party is a cooperative 2 player game. Each player needs to fulfill certain task to help the other player in order to win the game. " +
          'This game prototype was developped as port of the Ubisoft Game Lab 2022. The game was nominated for "Best creativity and integration of the theme".',
        myRole:
          "In this project I focused on game mechanics that required to be timed or synched over network. I also worked on various, more simple, game mechanics. " +
          +" I worked with the sound designer to integrate a music that intensify in real time depending on various events in the game.",
        notice:
          "This project was on GitLab and we recently decide to put it on github so the commit and merge request that were on GitLab are not on the github repo.",
        hasAdditionalLink: true,
        additionalLinkPlaceHolder: "Link to the Game Lab competition",
        additionalLink:
          "https://montreal.ubisoft.com/en/our-engagements/education/game-lab-competition/",
      },
    ],
  }),
};
</script>
