<script setup lang="ts">
import TheWelcome from "@/components/sections/TheWelcome.vue";
import TheAbout from "@/components/sections/TheAbout.vue";
import TheResume from "@/components/sections/TheResume.vue";
import ThePortfolio from "@/components/sections/ThePortfolio.vue";
import TheServices from "@/components/sections/TheServices.vue";
import TheContact from "@/components/sections/TheContact.vue";
</script>

<template>
  <main v-scroll-spy>
    <TheWelcome />
    <TheAbout />
    <TheResume />
    <!--TheServices />
    <TheContact /-->
  </main>
</template>
