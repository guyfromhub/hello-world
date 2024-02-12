<script setup>
import cars from "../data/cars.json"
import { RouterLink } from 'vue-router';

</script>

<template >
    <div class="flex justify-evenly pt-7">
        <!-- :to="`/cars/${car.id}`" This is a key factor which helps to change page and the path in the router(index.js) parses
        the data so it can pass the id. The variable catches it to use it on the Page. -->
        <router-link :to="`/cars/${car.id}`" class="cars" v-for="car in cars" href="" :key="car.id">
            {{ car.name }}
        </router-link>
    </div>
</template>

<style scoped>
.cars {
    @apply bg-slate-600 rounded-lg px-2 text-slate-100 hover:bg-slate-400 transition-all duration-150
}
</style>