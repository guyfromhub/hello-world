<script setup>

</script>

<template>
  <div class="w-screen h-screen bg-gray-800 justify-center text-blue-50 p-10 flex ">
    <div class="border border-blue-950 flex flex-col bg-black/40 rounded-md  px-2 py-3 shadow-lg shadow-blue-50 w-3/4">
      <h1 class="text-7xl">Quiz</h1>
      <hr class="my-2">
      <router-link to="/quiz"
        class="mx-[45%] my-[20%] p-3 text-blue-50 border border-blue-900 rounded-sm shadow shadow-neutral-400 hover:bg-gray-700/40 transition-all duration-150">
        Redirect
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.navB {
  @apply rounded-md p-4 border border-blue-900;
}
</style>