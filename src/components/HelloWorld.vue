<template>
  <v-row class="login center">
    <v-col sm="5">
      <v-col cols="12" sm="12">
        <v-img src="../assets/logo.png" alt="" contain class="mt-16"></v-img>
      </v-col>
    </v-col>
    <v-col cols="12" sm="7" class="center">
      <v-row align="center" justify="center">
        <v-col cols="6" sm="12" md="8">
          <v-card class="elevation-12">
            <!-- LOGIN CARD TOOLBAR -->
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>
                <v-icon>mdi-login</v-icon>
                Login
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <!-- LOGIN CARD TOOLBAR -->
            <!-- LOGIN INPUT FORM -->
            <v-card-text>
              <v-form @submit.prevent="authUser">
                <v-text-field outlined v-model="username" label="Username" color="secondary" name="login"
                  prepend-icon="mdi-account" type="text" />
                <v-text-field outlined v-model="password" id="password" label="Password" color="secondary" name="password"
                  prepend-icon="mdi-lock" type="password" @keypress.enter="authUser" />
              </v-form>
            </v-card-text>
            <!-- LOGIN INPUT FORM -->
            <!-- LOGIN BUTTONS -->
            <v-card-actions>
              <v-spacer />
              <v-btn @click="authUser" color="secondary">Enter</v-btn>
            </v-card-actions>
            <!-- LOGIN BUTTONS -->
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
