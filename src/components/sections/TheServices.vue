<script setup lang="ts">
	
import TheServiceCard from "@/components/TheServiceCard.vue";
import IconNoEntry from "../icons/IconNoEntry.vue";
</script>

<template>
	<section id="services" class="grid background min-h-screen w-screen text-black">
		<div class="w-3/5 mx-auto">
			<div class="container mt-24">
				<div class="mb-16">
					<h4 class="uppercase font-bold text-cyan-400 text-center text-xl poppins tracking-widest">Services</h4>
					<h1 class="uppercase font-bold text-black text-center text-2xl poppins tracking-tight">See what I host myself</h1>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-4 md:gap-4 text-gray-700 hidden">

					<TheServiceCard name="Test" desc="Dies ist ein Test" class="" />
					<div  class="">Splitterlicht Minecraft Server</div>
					<div class="">Gitea - SourceCode Management</div>
					<div class="">TeamCity - CI/CD</div>
					<div class="">Outline - Knowlege Base</div>


				</div>

				<div class="w-full relative">
					<IconNoEntry class="abolute top-0 left-0" />
					<div class="mx-auto text-center absolute top-1/2 w-full">
						<p class="mx-auto text-center -mt-4 w-full text-red-700 uppercase font-extrabold text-l md:text-2xl xl:text-3xl">Under Construction </p>
					</div>
					
				</div>
			
				
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>