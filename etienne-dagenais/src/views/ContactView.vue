<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-card class="mx-auto" width="600">
          <v-img height="300" src="@/assets/skate.jpg"></v-img>
          <v-card-title>
            Contact me on LinkedIn
            <v-btn
              icon
              href="https://www.linkedin.com/in/%C3%A9tienne-dagenais-95a6131aa/"
              target="_blank"
            >
              <v-icon color="blue">mdi-linkedin</v-icon></v-btn
            >
            Or send me an email:
          </v-card-title>
          <v-card-text>
            <v-form class="mx-2" @submit.prevent="sendEmail">
              <v-row>
                <v-text-field
                  v-model="yourName"
                  label="Name"
                  required
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="email"
                  label="Your email address"
                  required
                ></v-text-field>
              </v-row>
              <v-row>
                <v-textarea
                  v-model="msg"
                  label="Message"
                  required
                  rows="2"
                ></v-textarea>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" class="float-right mb-2"
                  >Send</v-btn
                >
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactView",
  data: () => ({
    yourName: "",
    email: "",
    msg: "",
  }),
  methods: {
    sendEmail() {
      let variables = {
        to_name: "Etienne",
        from_name: this.yourName,
        from_email: this.email,
        reply_to: this.email,
        message: this.msg,
      };

      emailjs
        .send(
          "service_d1k4lm6",
          "template_xka8b0e",
          variables,
          "jMgSXwv8a8ksdWYUW"
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      // Reset form field
      this.yourName = "";
      this.email = "";
      this.msg = "";
    },
  },
};
</script>
