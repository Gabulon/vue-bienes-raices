<script setup>
import { useForm, useField } from "vee-validate";
import { loginSchema as validationSchema } from "../validation/loginSchema";
import {useAuthStore} from "../stores/auth"

const { handleSubmit } = useForm({ validationSchema });
const auth = useAuthStore()

const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  auth.login(values)
})
</script>
<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">iniciar Sesión</h1>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-car-tittle class="text-h4 font-weight-bold" tag="h3">
      Iniciar Sesión
    </v-car-tittle>
    <v-car-subtitle class="text-h5">
      Inicia Sesión con tu cuenta
    </v-car-subtitle>
    <v-alert v-if="auth.hasError" class="my-5" type="success" :title="auth.errorMsg"  ></v-alert>
    <v-form class="mt-5">
      <v-text-field
        type="email"
        label="Email"
        class="mb-5"
        bg-color="blue-grey-lighten-5"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      />

      <v-text-field
        type="password"
        label="password"
         class="mb-5"
        bg-color="blue-grey-lighten-5"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
      />
    </v-form>
    <v-btn block color="pink-accent-3" @click="submit"> Iniciar Sesión </v-btn>
  </v-card>
</template>
