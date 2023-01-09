<script setup lang="ts">
import IconYouTube from "@/components/icons/IconYouTube.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
</script>

<template>
	<section id="welcome" class="grid background min-h-screen w-screen text-white">   

		<div class="place-self-center text-center my-12 mt-24">
			<h5 class="md:text-4xl text-2xl uppercase text-cyan-400 poppins font-bold">Hello, World.</h5>
			<h1 class="md:text-8xl text-4xl">I'm Marvin Schmidt.</h1>

			<p class="my-8 grid grid-cols-1 md:grid-cols-4 md:divide-x divide-gray-400 gap-2 md:gap-0 text-md">
				<span>Full-Stack</span>
				<span>Java</span> 
				<span>Web</span> 
				<span>DevOps</span> 
			</p>
			
			<router-link class="mt-16 border-4 border-gray-400 border-opacity-60 hover:border-cyan-400 hover:border-opacity-100 transition duration-500 p-5 inline-block" :to="{name: 'home', hash: '#about'}">
				More About Me
				<span class="pl-3">
					<span class="transform -rotate-90 inline-block px-1">
						&#10096;
					</span>
				</span>
			</router-link>

			<ul class="grid grid-cols-3 text-center mt-24 lg:mt-48 max-w-xs m-auto divide-gray-400">        
				<li><a href="https://youtube.com"><IconYouTube width="24px" height="24px" class="m-auto hover:text-cyan-400 transition duration-300" /></a></li>
				<li><a href="https://twitter.com/Grafnus"><IconTwitter width="24px" height="24px" class="m-auto hover:text-cyan-400 transition duration-300" /></a></li>
				<li><a href="https://instagram.com"><IconInstagram width="24px" height="24px" class="m-auto hover:text-cyan-400 transition duration-300" /></a></li>
			</ul>
		</div>

	</section>
</template>

<style scoped>

.background {
  background: url("@/assets/background/WelcomeBackground.jpg") no-repeat center;
}

</style>
