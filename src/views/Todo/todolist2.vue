<template>
    <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="state.firstName" />
        <span v-if="!v$.firstName.$dirty || v$.firstName.required">First name is required</span>

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="state.lastName" />
        <span v-if="!v$.lastName.$dirty || v$.lastName.required">Last name is required</span>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="state.contact.email" />
        <span v-if="!v$.contact.email.$dirty || v$.contact.email.required">Email is required</span>
        <span v-if="!v$.contact.email.$dirty || v$.contact.email.email">Invalid email format</span>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const state = reactive({
    firstName: '',
    lastName: '',
    contact: {
        email: ''
    }
})

const rules = {
    firstName: { required },
    lastName: { required },
    contact: {
        email: { required, email }
    }
}

const v$ = useVuelidate(rules, state)
</script>
