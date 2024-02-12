<script setup>
import { useRoute } from 'vue-router';
import cars from "../data/cars.json"

const route = useRoute()

const car = cars.find(c => c.id === parseInt(route.params.id))
</script>

<template>
    <div class="*:m-4">
        <h1 class="underline">
            Contact Info
        </h1>
        <h3 class="inline">{{ car.contact.dealer }}:</h3>
        <h3 class="inline"> {{ car.contact.number }}</h3>
    </div>
</template>
