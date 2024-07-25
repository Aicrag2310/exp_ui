<template>
  <v-row class="login center">
    <v-col sm="5">
      <v-col cols="12" sm="12">
        <v-img src="../assets/logo.png" alt="" contain class="mt-16"></v-img>
      </v-col>
    </v-col>
    <v-col cols="12" sm="7" class="center mt-15">
      <v-row align="center" justify="center">
        <v-col cols="6" sm="12" md="8">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title color="red">
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
import Swal from 'sweetalert2';
import * as AppUtils from '@/utils/AppUtils';


  export default {
    name: 'HelloWorld',

    data() {
    return {
      password: '',
      showPassword: false,
      username: '',
    };
  },
  methods: {
    authUser() {
      if (!this.username) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Favor de ingresar su usuario',
        });
        return;
      }
      if (!this.password) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Favor de ingresar su contraseña',
        });
        return;
      }
      if (this.username == 1234 & this.password == 1234){
        alert('Logeado correctamente');
        AppUtils.redirectToUserSectionByAttributes(this.$router);
      }
      else{
        alert('Error ');
      }
    }
  },
  }
</script>

<style scoped>
.admin-text {
  z-index: 1;
}

h2 {
  letter-spacing: 0.25rem;
  color: white;
  font-size: 2rem;
  font-weight: 300;
}

.login {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .login {
    flex-direction: row

;
  }
}
</style>
