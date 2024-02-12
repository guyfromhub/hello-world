<script setup>
import { useRoute, RouterView } from "vue-router";
import cars from "../data/cars.json"

const route = useRoute()
const car = cars.find(c => c.id === parseInt(route.params.id))
</script>

<template>
    <div class="flex flex-col text-4xl items-center justify-evenly">
        <h2>{{ car.id }}</h2>
        <h2>{{ car.name }}</h2>
        <h2>{{ car.year }}</h2>
        <h2>{{ car.price }}</h2>
        <RouterView />
    </div>
</template>