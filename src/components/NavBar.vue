<script setup>
//RouteLink used as Anchor tag to check if route to the defined link. Link defined in /router/index.js.
import { RouterLink } from "vue-router";


</script>

<template>
    <nav class="flex w-screen px-2 py-1 font-semibold text-white bg-slate-800">
        <h1>Project1</h1>
        <ol class="*:inline ml-auto *:m-1">
            <!-- active-class check the page state/which page is the user on -->
            <li><Router-link class="px-2" active-class="activeTab" to="/">Home</Router-link></li>
            <li><Router-link class="px-2" active-class="activeTab" to="/about">About</Router-link></li>
        </ol>
    </nav>
</template>

<style scoped>
.activeTab {
    @apply text-xl bg-slate-600 transition-all duration-200
}
</style>