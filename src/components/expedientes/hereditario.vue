<template>
    <v-container>
      <v-card class="pa-4" outlined>
        <v-card-title class="headline">Antecedentes Hereditarios</v-card-title>
        <v-divider></v-divider>
  
        <v-row>
          <v-col cols="12" md="2"><strong>Enfermedad</strong></v-col>
          <v-col cols="2" md="2" class="text-center"><strong>Abuelos</strong></v-col>
          <v-col cols="2" md="2" class="text-center"><strong>Hermanos</strong></v-col>
          <v-col cols="2" md="2" class="text-center"><strong>Madre</strong></v-col>
          <v-col cols="2" md="2" class="text-center"><strong>Padre</strong></v-col>
        </v-row>
  
        <v-divider></v-divider>
  
        <div v-for="(item, index) in diseases" :key="index">
          <v-row>
            <v-col cols="12" md="2">{{ item.disease }}</v-col>
            <v-col cols="2" md="2" class="text-center">
              <v-checkbox v-model="item.abuelos" @change="updateSelection('abuelos', item.disease)" hide-details></v-checkbox>
            </v-col>
            <v-col cols="2" md="2" class="text-center">
              <v-checkbox v-model="item.hermanos" @change="updateSelection('hermanos', item.disease)" hide-details></v-checkbox>
            </v-col>
            <v-col cols="2" md="2" class="text-center">
              <v-checkbox v-model="item.madre" @change="updateSelection('madre', item.disease)" hide-details></v-checkbox>
            </v-col>
            <v-col cols="2" md="2" class="text-center">
              <v-checkbox v-model="item.padre" @change="updateSelection('padre', item.disease)" hide-details></v-checkbox>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
  
        <v-btn @click="submit" color="primary" class="mt-4">
          <v-icon left>mdi-content-save</v-icon>
          Guardar
        </v-btn>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Antecedentes-view',
    data() {
      return {
        diseases: [
          { disease: 'A.V.C', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Alergias', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Cáncer', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Anomalías congénitas', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Cardiopatías', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Ceguera congénita', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Daltonismo', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Diabetes', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Enfermedad mental', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Enfermedad pulmonar', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Epilepsia', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Hipertensión arterial', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Neoplasia', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'Sordera', abuelos: false, hermanos: false, madre: false, padre: false },
          { disease: 'T.B.C pulmonar', abuelos: false, hermanos: false, madre: false, padre: false },
        ]
      };
    },
    methods: {
      updateSelection(familyMember, disease) {
        console.log(`Updated selection for ${familyMember} with disease ${disease}`);
      },
      submit() {
        // Process the selected diseases and family members
        const selectedDiseases = this.diseases.filter(disease => 
          disease.abuelos || disease.hermanos || disease.madre || disease.padre
        );
        console.log('Selected Diseases:', selectedDiseases);
        this.$emit('saved', 'patologicos');
      }
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    max-width: 800px;
    margin: 0 auto;
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
  
  .v-data-table .text-center {
    text-align: center;
  }
  </style>
  