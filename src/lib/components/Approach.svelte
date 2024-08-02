<script>
	import EvervaultCardIcon from './ui/EvervaultCard/EvervaultCardIcon.svelte';
</script>

<section class="w-full py-20">
    <h1 class=" md:text-2xl lg:text-5xl font-semibold text-white 
    flex justify-center items-center">
		My {' '}
		<span class="ml-4 text-purple-200">approach</span>
	</h1>
	<div
		class="my-20 flex flex-col lg:flex-row items-center justify-between
    w-full gap-16 px-8 mx-auto"
	>
		<div class=" lg:w-[27%] w-3/4">
			<EvervaultCardIcon text="Planning & Strategy" />
		</div>
		<div class="lg:w-[27%] w-3/4">
			<EvervaultCardIcon text="Development & Progress Update" />
		</div>
		<div class="lg:w-[27%] w-3/4">
			<EvervaultCardIcon text="Development & Launch" />
		</div>
	</div>
</section>
