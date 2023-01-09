<script setup lang="ts">
import IconService from "./icons/IconService.vue";
defineProps<{
  name: string;
  desc: string;
}>();
</script>

<template>
  <div class="rounded-md bg-gray-200">
    <div class="border-4 border-gray-400 rounded-full w-14 h-14">
      <IconService class="w-10 h-10 mx-auto" />
    </div>
    <p class="">{{ name }}</p>
  </div>
</template>

<style scoped>
</style>
