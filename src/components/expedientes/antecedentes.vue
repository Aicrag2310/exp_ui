<template>
    <v-container>
      <v-bottom-navigation color="primary" grow>
        <v-btn :disabled="!pagesSaved['hereditarios']" @click="navigateTo('hereditarios')" :class="{ 'v-btn--active': currentPage === 'hereditarios' }">
          <v-icon>mdi-dna</v-icon>
          <span class="d-none d-sm-flex">Hereditarios</span>
        </v-btn>
        <v-btn :disabled="!pagesSaved['patologicos']" @click="navigateTo('patologicos')" :class="{ 'v-btn--active': currentPage === 'patologicos' }">
          <v-icon>mdi-hospital"></v-icon>
          <span class="d-none d-sm-flex">Patológicos</span>
        </v-btn>
        <v-btn :disabled="!pagesSaved['noPatologicos']" @click="navigateTo('noPatologicos')" :class="{ 'v-btn--active': currentPage === 'noPatologicos' }">
          <v-icon>mdi-hiking</v-icon>
          <span class="d-none d-sm-flex">No Patológicos</span>
        </v-btn>
        <v-btn :disabled="!pagesSaved['obstetricos']" @click="navigateTo('obstetricos')" :class="{ 'v-btn--active': currentPage === 'obstetricos' }">
          <v-icon>mdi-baby-bottle</v-icon>
          <span class="d-none d-sm-flex">Obstétricos</span>
        </v-btn>
      </v-bottom-navigation>
  
      <v-form ref="form" v-model="valid" lazy-validation>
        
        <div v-if="currentPage === 'hereditarios'">
            <hereditarioComponent ref="hereditarioComponent" @saved="onPageSaved" />
        </div>

        <div v-if="currentPage === 'patologicos'">
            <patologicosComponent ref="patologicosComponentForm" @saved="onPageSaved" />
        </div>
        
        <div v-if="currentPage === 'noPatologicos'">
            <noPatologicosComponent ref="noPatologicosComponentForm" @saved="onPageSaved" />
        </div>
    
        <div v-if="currentPage === 'obstetricos'">
          <h2>Antecedentes Obstétricos</h2>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="antecedents.obstetricos.gestaciones" label="Gestaciones" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="antecedents.obstetricos.partos" label="Partos" outlined dense></v-text-field>
            </v-col>
            <!-- Agrega más campos según sea necesario -->
          </v-row>
        </div>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import patologicosComponent from './patologicos.vue'
  import hereditarioComponent from './hereditario.vue'
  import noPatologicosComponent from './noPatologicos.vue';
  export default {
    name: 'Antecedentes-view',
    data() {
      return {
        pagesSaved: {
            hereditarios: false,
            patologicos: false,
            noPatologicos: false,
            obstetricos: false
      },
        valid: false,
        currentPage: 'hereditarios',
        antecedents: {
          hereditarios: {
            diabetes: '',
            hipertension: '',
            // Agrega más campos según sea necesario
          },
          patologicos: {
            enfermedades: '',
            hospitalizaciones: '',
            // Agrega más campos según sea necesario
          },
          noPatologicos: {
            habitos: '',
            alimentacion: '',
            // Agrega más campos según sea necesario
          },
          obstetricos: {
            gestaciones: '',
            partos: '',
            // Agrega más campos según sea necesario
          }
        },
        rules: {
          required: v => !!v || 'Este campo es requerido'
        }
        
      };
    },
    components: {
        patologicosComponent,
        hereditarioComponent,
        noPatologicosComponent
    },
    methods: {
      showPage(page) {
      this.currentPage = page;
      localStorage.setItem('lastPage', page);
    },
    onPageSaved(page) {
      console.log('Que page es ', page);
      this.pagesSaved[page] = true;
      this.showPage(page)
    },
      submit() {
        if (this.$refs.form.validate()) {
          // Procesar la información de antecedentes
          console.log('Información de antecedentes:', this.antecedents);
          // Aquí puedes agregar el código para enviar la información a tu servidor
        }
      }
    },
    mounted() {
        this.currentPage = 'hereditarios'
  },
  };
  </script>
  
  <style scoped>
  .v-bottom-navigation {
    box-shadow: none !important;
    border: none !important;
  }
  
  .v-btn--active {
    background-color: var(--v-primary-base) !important;
    color: white !important;
  }
  
  .v-btn {
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .v-btn:hover {
    background-color: #1976d2;
    transform: scale(1.05);
  }
  
  .v-btn:focus {
    background-color: #1e88e5;
  }
  </style>
  