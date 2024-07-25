<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <!-- Primera columna: Información Personal -->
                <v-col cols="12" md="8">
                    <v-card class="pa-4" outlined>
                        <v-card-title class="headline">Información Personal</v-card-title>
                        <v-divider></v-divider>
                        <v-row>
                            <!-- Campos de información personal -->
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.firstName" :rules="[rules.required]" label="Nombre"
                                    required outlined color="primary" dense></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.middleName" label="Segundo Nombre" outlined
                                    color="primary" dense></v-text-field>
                            </v-col>
                            <!-- Más campos aquí -->
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.address" :rules="[rules.required]" label="Domicilio"
                                    required outlined color="primary" dense></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.city" :rules="[rules.required]" label="Ciudad" required
                                    outlined color="primary" dense></v-text-field>
                            </v-col>
                            <!-- Más campos aquí -->
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.dateOfBirth" :rules="[rules.required]"
                                    label="Fecha de Nacimiento" required type="date" outlined color="primary" dense
                                    @change="calculateAge"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.age" label="Edad" readonly outlined color="primary"
                                    dense></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.email" label="Correo Electrónico" type="email" outlined
                                    color="primary" dense></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="patient.phone" label="Teléfono" type="tel" outlined
                                    color="primary" dense></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea v-model="patient.observations" label="Observaciones" rows="4" outlined
                                    color="primary"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <!-- Segunda columna: Foto -->
                <v-col cols="12" md="4">
                    <v-card class="pa-4" outlined>
                        <v-card-title class="headline">Foto del Paciente</v-card-title>
                        <v-divider></v-divider>
                        <v-file-input v-model="patient.photo" label="Subir Foto" accept="image/*"
                            prepend-icon="mdi-camera" outlined color="primary" dense capture="environment"
                            @change="onFileChange"></v-file-input>
                        <v-img v-if="patient.photo" :src="URL.createObjectURL(patient.photo)" class="mt-4"
                            max-height="200px" contain></v-img>
                    </v-card>
                </v-col>

                <!-- Botón Guardar -->
                <v-col cols="12">
                    <v-btn @click="submit" color="primary" class="mt-4">
                        <v-icon left>mdi-content-save</v-icon>
                        Guardar
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
    name: 'InforPacientes',
    data() {
        return {
            valid: false,
            patient: {
                firstName: '',
                middleName: '',
                lastNamePaternal: '',
                lastNameMaternal: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                doctorName: '',
                gender: '',
                dateOfBirth: '',
                age: '',
                email: '',
                phone: '',
                observations: '',
                photo: null
            },
            genders: ['Masculino', 'Femenino', 'Otro'],
            rules: {
//                required: v => !!v || 'Este campo es requerido',
                email: v => /.+@.+\..+/.test(v) || 'Debe ser un correo electrónico válido'
            }
        };
    },
    methods: {
        calculateAge() {
            const today = new Date();
            const birthDate = new Date(this.patient.dateOfBirth);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                this.patient.age = age - 1;
            } else {
                this.patient.age = age;
            }
        },
        submit() {
            if (this.$refs.form.validate()) {
                // Procesar la información del paciente
                console.log('Información del paciente:', this.patient);
                // Aquí puedes agregar el código para enviar la información a tu servidor
                this.$emit('saved', 'antecedentes');
            }
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.patient.photo = file;
            }
        }
    }
};
</script>

<style scoped>
.v-form {
    max-width: 1200px;
    margin: 0 auto;
}

.v-text-field,
.v-select,
.v-textarea,
.v-file-input {
    margin-bottom: 16px;
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

.v-img {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
