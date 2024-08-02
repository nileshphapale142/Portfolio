<script>
	import { HeroSection } from '$lib/components';
	import Approach from '$lib/components/Approach.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import FloatingNavbar from '$lib/components/FloatingNavbar/FloatingNavbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import RecentProjects from '$lib/components/RecentProjects.svelte';
	import { navItems } from '$lib/data';
</script>

<main
	class="relative bg-black-100 flex justify-center items-center
    flex-col overflow-hidden mx-auto sm:px-10 px-5"
>
	<div class="max-w-7xl w-full">
		<FloatingNavbar {navItems} />
		<HeroSection />
		<Grid />
		<RecentProjects/>
		<Experience/>
		<!-- <Approach/> -->
		 <Footer/>
	</div>
</main>
