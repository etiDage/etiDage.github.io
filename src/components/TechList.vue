<template>
  <v-row>
    <v-col cols="6">
      <li v-for="tech in rows[0]" :key="tech">
        {{ tech }}
      </li>
    </v-col>
    <v-col cols="6">
      <li v-for="tech in rows[1]" :key="tech">
        {{ tech }}
      </li>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    techs: Array,
  },
  data: function() {
    return {
      rows: this.divideInTwoArray(this.techs),
    };
  },
  methods: {
    divideInTwoArray(array) {
      let arrayCopy = JSON.parse(JSON.stringify(array));
      let splitLenght = Math.max(arrayCopy.length / 2, 1);
      let arrays = [];
      for (let i = 0; i < 2; i++) {
        if (splitLenght * (i + 1) <= arrayCopy.length) {
          arrays.push(arrayCopy.slice(splitLenght * i, splitLenght * (i + 1)));
        }
      }
      return arrays;
    },
  },
};
</script>
