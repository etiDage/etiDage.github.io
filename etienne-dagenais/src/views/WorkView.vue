<template>
  <v-container style="width: 80%" class="mx-auto">
    <v-timeline>
      <v-timeline-item
        v-for="(work, index) in works"
        :key="index"
        color="primary"
      >
        <template v-slot:opposite>
          <v-img
            :src="require('../assets/' + work.companyLogo + '_logo.png')"
            max-height="100"
            max-width="200"
            :class="
              (index % 2 == 0 ? 'float-right ' : 'float-left ') + ' pa0 ma0'
            "
          />
        </template>
        <v-card class="elevation-2">
          <v-card-title class="primary">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 white--text">
                  {{ work.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="ml-2 white--text">
                  {{ work.workPlace }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="text-body-1 white--text">
                <span>{{ work.time }}</span>
              </v-list-item-action>
            </v-list-item>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="task in work.tasks" :key="task">
                <v-list-item-content class="text-body-1">
                  <li>{{ task }}</li>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Tech worked</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <tech-list :techs="work.tech" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
import TechList from "../components/TechList.vue";
export default {
  components: { TechList },
  name: "WorkView",
  data: () => ({
    test: "IBM",
    works: [
      {
        title: "Fullstack developper coop",
        workPlace: "IBM, Bromont, QC, Canada",
        companyLogo: "IBM",
        time: "Summer 2022",
        tasks: [
          "Create an ID management application from scratch using DB2, Java Spring and Vue.js",
          "Work with the future users of the application to understand the requirements.",
          "Design the tables of the database.",
          "Design the architecture of the application.",
          "Setup automated test for the application.",
        ],
        tech: ["Vue.js", "Java spring", "DB2", "Github"],
        techImg: ["img", "img", "img", "img"],
      },
      {
        title: "Security intern",
        workPlace: "IBM, Bromont, QC, Canada",
        companyLogo: "IBM",
        time: "Fall 2021",
        tasks: [
          "Develop a new front-end for an access management application using Vue.js.",
          "Get the feed back from the users to make sure the UI fit their needs.",
          "Make static and dynamic security scan on the front-end.",
          "Develop a Perl script to check the state of the bootable drives of the servers.",
        ],
        tech: ["Vue.js", "Javascript", "Perl", "Github"],
        techImg: ["img", "img", "img", "img"],
      },
      {
        title: "Software developper coop",
        workPlace: "Mirametrix, Montreal, QC, Canada",
        companyLogo: "mirametrix",
        time: "Winter 2021",
        tasks: [
          "Develop a C# application to change the settings of Glance (the main app of the company).",
          "Develop new API function on Glance to call them with my application.",
          "Develop a python script to check for new versions of the third-party libraries used by Glance.",
          "Create new automated test for Glance using Pytest.",
          "Create a Jenkins pipeline for my new application.",
        ],
        tech: ["C++", "C# UWP", "Python", "Pytest", "Perforce", "Jira"],
        techImg: ["img", "img", "img", "img"],
      },
      {
        title: "Web developper coop",
        workPlace: "xPayrience, Magog, QC, Canada",
        companyLogo: "xpayrience",
        time: "Summer 2020",
        tasks: [
          "Develop the new version of the online ticketing store",
          "Create new online store.",
          "Add custom features to existing store on demand of the clients",
          "Improve the store generator so that the store creation took 5min. instead of 45min.",
        ],
        tech: ["PHP", "Javascript", "SQL", "HTML", "CSS", "Git", "Trello"],
        techImg: [
          "@/assets/php_logo.png",
          "@/assets/js_logo.png",
          "@/assets/postgresql_logo.png",
        ],
      },
    ],
  }),
  methods: {
    getSrc() {
      var images = require.context("@/assets/", false, /\.png$/);
      return images("IBM" + "_logo.png");
    },
  },
};
</script>
