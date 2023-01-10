<script setup lang="ts">
</script>

<template>
	<section id="about" class="grid background min-h-screen w-screen text-black poppins">
		<div class="container">
			<div class="container mt-24">
				<div class="p-6 mb-10">
					<h4 class="uppercase font-bold text-cyan-400 text-center text-xl poppins tracking-widest">About</h4>
					<h1 class="uppercase font-bold text-black text-center text-2xl poppins tracking-tight">This is me</h1>
				</div>
				<div class="grid lg:grid-cols-11 gap-4 mb-10">
					<div class="col-span-4 font-light leading-loose">
						<p class="mb-5">Hi, I'm a passionate Full-Stack Developer and a hobby System Administrator. I love to create my own litte programs or additions for platforms like Minecraft Spigot.</p>
						<p class="mb-5 hidden">My other passion is the development of Websites and Webservices. Although no projects are publicly available (except for this one ;D), I like to create interactive and responsive Interfaces.</p>
						<p>For me learning is the most fun. Thats why I love to explore the world of software, programming and selfhosting. I host my Webpages - like this one - and other Services myself and administrate them for family and friends.</p>
					</div>
					<div class="col-span-3 flex pt-10 md:pt-0">
						<img class="h-52 w-52 rounded-full m-auto border-8 border-stone-200" src="@/assets/profile.png" alt="Profile" />
					</div>
					<div class="col-span-4 flex">
						<div class="my-auto">
							<p class="font-bold text-gray-800">Name</p>
							<p class="mb-5 text-gray-400">Marvin (Hendrik) Schmidt</p>
							<p class="font-bold text-gray-800">Age</p>
							<p class="mb-5 text-gray-400">23</p>
							<p class="font-bold text-gray-800">Location</p>
							<p class="mb-5 text-gray-400">Germany - Bremen</p>
							<p class="font-bold text-gray-800">Job</p>
							<p class="mb-5 text-gray-400">IT Specialist for application development</p>
							<p class="font-bold text-gray-800">Hobby Webpage</p>
							<p class="mb-5 line-through text-gray-400">www.grafnus.de</p>
						</div>
						
					</div>
				</div>
			</div>
			<div class="container mt-24 poppins">
				<div class="p-6 mb-10">
					<h4 class="uppercase font-bold text-cyan-400 text-center text-xl poppins tracking-widest">Skills</h4>
					<h1 class="uppercase font-bold text-black text-center text-2xl poppins tracking-tight">What I am capable of</h1>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
					<div>
						<h3 class="font-bold mb-4 text-center  mt-11">Spoken Languages</h3>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">German - Native</span>
								<span class="text-sm font-medium text-gray-800">100%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 100%"></div>
							</div>
						</div>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">English - Daily use</span>
								<span class="text-sm font-medium text-gray-800">90%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 90%"></div>
							</div>
						</div>
						<h3 class="font-bold mb-4 text-center mt-11">Tools</h3>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">VS-Code</span>
								<span class="text-sm font-medium text-gray-800">100%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 100%"></div>
							</div>
						</div>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">Linux CLI</span>
								<span class="text-sm font-medium text-gray-800">90%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 90%"></div>
							</div>
						</div>
					</div>
					<div>
						<h3 class="font-bold mb-4 text-center  mt-11">Programming Languages</h3>
						
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">Java</span>
								<span class="text-sm font-medium text-gray-800">100%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 100%"></div>
							</div>
						</div>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">JavaScript & HTML & CSS</span>
								<span class="text-sm font-medium text-gray-800">100%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 100%"></div>
							</div>
						</div>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">PHP</span>
								<span class="text-sm font-medium text-gray-800">85%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 85%"></div>
							</div>
						</div>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">SQL</span>
								<span class="text-sm font-medium text-gray-800">85%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 85%"></div>
							</div>
						</div>
						<div class="mb-5">
							<div class="flex justify-between mb-2">
								<span class="text-base font-medium text-gray-800">C++</span>
								<span class="text-sm font-medium text-gray-800">65%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div class="bg-cyan-400 h-2.5 rounded-full" style="width: 65%"></div>
							</div>
						</div>
					</div>
					<div>
						
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style> 