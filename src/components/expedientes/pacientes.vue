<template>
  <v-container>
    <v-bottom-navigation color="primary">
      <v-btn :disabled="!pagesSaved['infoPersonal']" @click="navigateTo('infoPersonal')" :class="{ 'v-btn--active': currentPage === 'infoPersonal' }">
        <v-icon>mdi-account</v-icon>
        <span class="d-none d-sm-flex">Información Personal</span>
      </v-btn>
      <v-btn :disabled="!pagesSaved['antecedentes']" @click="navigateTo('antecedentes')" :class="{ 'v-btn--active': currentPage === 'antecedentes' }">
        <v-icon>mdi-file-document</v-icon>
        <span class="d-none d-sm-flex">Antecedentes</span>
      </v-btn>
      <v-btn :disabled="!pagesSaved['exploracionFisica']" @click="navigateTo('exploracionFisica')" :class="{ 'v-btn--active': currentPage === 'exploracionFisica' }">
        <v-icon>mdi-stethoscope</v-icon>
        <span class="d-none d-sm-flex">Exploración Física</span>
      </v-btn>
      <v-btn :disabled="!pagesSaved['interrogatorio']" @click="navigateTo('interrogatorio')" :class="{ 'v-btn--active': currentPage === 'interrogatorio' }">
        <v-icon>mdi-alert-circle</v-icon>
        <span class="d-none d-sm-flex">Interrogatorio</span>
      </v-btn>
      <v-btn :disabled="!pagesSaved['estiloDeVida']" @click="navigateTo('estiloDeVida')" :class="{ 'v-btn--active': currentPage === 'estiloDeVida' }">
        <v-icon>mdi-file</v-icon>
        <span class="d-none d-sm-flex">Estilo De Vida</span>
      </v-btn>
      <v-btn :disabled="!pagesSaved['estiloDeVida']" @click="navigateTo('alergias')" :class="{ 'v-btn--active': currentPage === 'alergias' }">
        <v-icon>mdi-map-marker</v-icon>
        <span class="d-none d-sm-flex">Alergias</span>
      </v-btn>
    </v-bottom-navigation>

    <div v-if="currentPage === 'infoPersonal'">
      <infoPersonalComponent ref="infoPersonalForm" @saved="onPageSaved" />
    </div>
    <div v-if="currentPage === 'antecedentes'">
      <antecedentesComponent ref="antecedentesForm" @saved="onPageSaved" />
    </div>
    <div v-if="currentPage === 'exploracionFisica'">
      <exploracionFisicaComponent ref="exploracionFisicaForm" @saved="onPageSaved" />
    </div>
    <div v-if="currentPage === 'interrogatorio'">
      <interrogatorioComponent ref="interrogatorioForm" @saved="onPageSaved" />
    </div>
    <div v-if="currentPage === 'estiloDeVida'">
      <estiloDeVidaComponent ref="estiloDeVidaForm" @saved="onPageSaved" />
    </div>
    <div v-if="currentPage === 'alergias'">
      <alergiasComponent ref="alergiasForm" @saved="onPageSaved" />
    </div>

  </v-container>
</template>

<script>
import infoPersonalComponent from './infoPersonal.vue'
import antecedentesComponent from './antecedentes.vue'
export default {
  name: 'Add-Emplyoes-card',
  data() {
    return {
      permission: null,
      value: null,
      currentPage: localStorage.getItem('lastPage') || 'infoPersonal',
      pagesSaved: {
        infoPersonal: false,
        antecedentes: false,
        exploracionFisica: false,
        interrogatorio: false,
        estiloDeVida: false,
        alergias: false
      }
    };
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
    }
  },
  mounted() {
    this.currentPage = 'infoPersonal'
  },
  components: {
    infoPersonalComponent,
    antecedentesComponent,
  },
};
</script>
<style scoped>
.v-bottom-navigation {
  box-shadow: none !important;
  border: none !important;
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

.v-btn--active {
  background-color: #1e88e5 !important;
  color: white !important;
}

.d-none {
  display: none;
}

.d-sm-flex {
  display: flex;
}

@media (min-width: 600px) {
  .d-sm-flex {
    display: flex !important;
  }
}

@media (max-width: 600px) {
  .d-none {
    display: none !important;
  }
}
</style>