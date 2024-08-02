<script>
	import { socialMedia } from '$lib/data';
	import MagicButton from './ui/MagicButton/MagicButton.svelte';
</script>

<footer class="w-full pt-20 pb-10" id="contact">
	<!-- <div class="w-full absolute left-0 -bottom-72 min-h-96">
		<img
			src="/footer-grid.svg"
			alt="grid"
			class="w-full h-full opacity-50"
		/>
	</div> -->

	<div class="flex flex-col items-center">
		<h1 class="heading">
			Ready to take <span class="text-purple-200">your</span
			> digital presence to the next level
		</h1>
		<p class="text-white md:mt-10 my-5 text-center">
			Reach out to me today and let&apos;s discuss how I can
			help you achieve your goals.
		</p>
		<a href="mailto:nileshphapale142@gmail.com">
			<MagicButton name="Let's get in touch" />
		</a>
	</div>

	<div
		class="flex mt-16 md:flex-row flex-col justify-between items-center"
	>
		<p
			class="text-white md:text-base text-sm md:font-normal font-light"
		>
			Copyright © 2024 Nilesh
		</p>
		<div class="flex items-center md:gap-3 lg:gap-6">
			{#each socialMedia as profile}
				<a class="relative w-10 h-10 cursor-pointer flex justify-center items-center
                backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75
                rounded-lg border bg-black-200 border-black-300"
                href={profile.link}>
					<img
						src={profile.img}
						alt={profile.id.toString()}
						width="20"
						height="20"
					/>
                    
				</a>
			{/each}
		</div>
	</div>
</footer>
