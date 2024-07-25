<template>
    <v-container>
      <v-card class="pa-4" outlined>
        <v-card-title class="headline">Antecedentes Patológicos</v-card-title>
        <v-divider></v-divider>
  
        <v-data-table
          :headers="headers"
          :items="diseases"
          hide-default-footer
          class="my-4"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.disease }}</td>
              <td><v-checkbox v-model="item.present" @change="updateSelection(item.disease)"></v-checkbox></td>
              <td><v-text-field v-model="item.details" placeholder="Detalles" outlined dense></v-text-field></td>
            </tr>
          </template>
        </v-data-table>
  
        <v-btn @click="submit" color="primary" class="mt-4">
          <v-icon left>mdi-content-save</v-icon>
          Guardar
        </v-btn>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Patologicos-view',
    data() {
      return {
        headers: [
          { text: 'Enfermedad', value: 'disease', align: 'start' },
          { text: 'Presente', value: 'present', align: 'center' },
          { text: 'Detalles', value: 'details', align: 'start' },
        ],
        diseases: [
          { disease: 'Hipertensión', present: false, details: '' },
          { disease: 'Diabetes', present: false, details: '' },
          { disease: 'Asma', present: false, details: '' },
          { disease: 'Enfermedad Cardiaca', present: false, details: '' },
          { disease: 'Epilepsia', present: false, details: '' },
          { disease: 'Cáncer', present: false, details: '' },
          // Añadir más enfermedades según sea necesario
        ],
      };
    },
    methods: {
      updateSelection(disease) {
        console.log(`Updated selection for disease: ${disease}`);
      },
      submit() {
        // Procesar la información de los antecedentes patológicos
        const selectedDiseases = this.diseases.filter(disease => disease.present);
        console.log('Selected Diseases:', selectedDiseases);
        this.$emit('saved', 'noPatologicos');
      },
    },
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
  
  .v-data-table th {
    text-align: center;
  }
  
  .v-data-table td {
    text-align: center;
  }
  </style>
  