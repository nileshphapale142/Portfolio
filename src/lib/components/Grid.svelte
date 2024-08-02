<script>
	import BentoGrid from './ui/BentoGrid/BentoGrid.svelte';
	import BentoGridItem from './ui/BentoGrid/BentoGridItem.svelte';
	import { gridItems as items } from '$lib/data';
</script>

<section id="about">
	<BentoGrid>
		{#each items as {id, title, description, 
			className, img, imgClassName, 
			titleClassName, spareImg}}
			<BentoGridItem
				{id}
				{title}
				{description}
				{className}
				{img}
				{imgClassName}
				{spareImg}
				{titleClassName}
				/>
		{/each}
	</BentoGrid>
</section>