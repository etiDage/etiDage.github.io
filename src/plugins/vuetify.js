import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.darken1,
        secondary: colors.green.lighten4,
        accent: colors.blueGrey,
      },
      dark: {
        primary: colors.green.darken1,
        secondary: colors.green.lighten4,
        accent: colors.blueGrey,
      },
    },
  },
});
