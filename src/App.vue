<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheNavigation from "@/components/permanent/TheNavigation.vue";
</script>

<template>
  <TheNavigation class="z-50" />
  <RouterView class="w-screen min-h-screen overflow-hidden" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

.poppins {
  font-family: 'Poppins', sans-serif;
}

body {
  overflow-x: hidden;
}

</style>
