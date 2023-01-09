<template>
    <header class="fixed w-screen z-50">   	
   	    <div class="absolute  top-0 left-0 bg-opacity-0 w-full">

   		    <div class="top-bar w-80 nav-width always-on-top" v-click-outside="closeNav">
				<div class="grid grid-cols-6 text-xl poppins text-white bg-black">
					<button class="menu-toggle col-span-1 p-3" @click="toggleNav" >
						<div class="nav-menu-icon " :class="{ navcloseicon: !isHidden }">
							<div></div>
						</div>
					</button>

					<div class="logo col-span-5 p-3 text-3xl">
						<router-link :to="{name: 'home', hash: '#welcome'}">Marvin Schmidt</router-link>
					</div>
				</div>

		   	    <nav id="main-nav-wrap" class="bg-black text-white transition-all duration-1000 ease-in-out" :class="{ mFadeOut: isHidden, mFadeIn: !isHidden }">
					<ul class="px-5" v-scroll-spy-active="{selector: 'li', class: 'text-cyan-400'}">
						<li><router-link class="block text-lg py-3 hover:text-cyan-400 transition duration-300" :to="{name: 'home', hash: '#welcome'}">Home</router-link></li>
						<li><router-link class="block text-lg py-3 hover:text-cyan-400 transition duration-300" :to="{name: 'home', hash: '#about'}">About</router-link></li>
						<li><router-link class="block text-lg py-3 hover:text-cyan-400 transition duration-300" :to="{name: 'home', hash: '#resume'}">Resume</router-link></li>
						<!--li><router-link class="block text-lg py-3 hover:text-cyan-400 transition duration-300" :to="{name: 'home', hash: '#services'}">Services</router-link></li>
						<li><router-link class="block text-lg py-3 hover:text-cyan-400 transition duration-300" :to="{name: 'home', hash: '#contact'}">Contact</router-link></li-->			
					</ul>
				</nav>    		
   		    </div> <!-- /top-bar --> 
   		
   	    </div> <!-- /row --> 		
   </header> <!-- /header -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TheNavigation',
	data() {
		return {
			isHidden: true
		};
	},
	methods: {
		toggleNav(): void {
			this.isHidden = !this.isHidden;
		},
		closeNav(): void {
			this.isHidden = true;
		}
	}
})
</script>

<style scoped>

.nav-width {
	margin-left: 20vw;
}

.nav-menu-icon {
	width: 32px;
}

.nav-menu-icon:before,
.nav-menu-icon:after,
.nav-menu-icon div {
  background: rgb(34 211 238);
  content: "";
  display: block;
  height: 4px;
  border-radius: 2px;
  margin: 7px 0;
  transition: 0.5s;
}

.navcloseicon::before {
  transform: translateY(10px) rotate(135deg);
}

.navcloseicon::after {
  transform: translateY(-10px) rotate(-135deg);
}

.navcloseicon div {
  transform: scale(0);
}

.mFadeOut {
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s linear 300ms, opacity 300ms;
}

.mFadeIn {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
}

.always-on-top {
	z-index: 1000;
}

</style>