<script setup>
</script>
<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">iniciar Sesión</h1>
    <v-card flat max-width="600" class="mx-auto my-10">
        <v-car-tittle
        class="text-h4 font-weight-bold"
        tag="h3">
            Iniciar Sesión
        </v-car-tittle>
        <v-car-subtitle class="text-h5">
            Inicia Sesión con tu cuenta
        </v-car-subtitle>
        <v-form class="mt-5">
            <v-text-field type="email" label="Email" bg-color="blue-grey-lighten-5"/>

            <v-text-field type="password" label="password" bg-color="blue-grey-lighten-5"/>
        </v-form>
        <v-btn block color="pink-accent-3">
            Iniciar Sesión
        </v-btn>
    </v-card>
</template>