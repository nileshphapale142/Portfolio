<script lang="ts">
	import {
		Motion,
		AnimatePresence,
		useViewportScroll,
		useMotionValue
	} from 'svelte-motion';
	import { cn } from '$lib/utils';
	import type { ComponentType } from 'svelte';
	import Icon from '../ui/EvervaultCard/Icon.svelte';

	export let navItems: {
		name: string;
		link: string;
		icon?: ComponentType;
	}[];
	export let className: string | undefined = undefined;

	// console.log(navItems);

	// const { scrollYProgress } = useScroll();
	const { scrollYProgress } = useViewportScroll();

	let visible = false;

	$: $scrollYProgress, updateDirection();

	function updateDirection() {
		// console.log($scrollYProgress);

		let direction =
			$scrollYProgress - scrollYProgress.getPrevious();
		// console.log(direction);

		if (scrollYProgress.get() < 0.05) {
			visible = false;
		} else {
			if (direction < 0) {
				visible = true;
			} else {
				visible = false;
			}
		}
	}
</script>

<AnimatePresence show={true}>
	<Motion
		let:motion
		initial={{
			opacity: 1,
			y: -100
		}}
		animate={{
			y: visible ? 0 : -100,
			opacity: visible ? 1 : 0
		}}
		transition={{
			duration: 0.2
		}}
	>
		<div
			use:motion
			class={cn(
				`fixed inset-x-0  top-10 z-[5000] mx-auto flex 
				max-w-fit items-center justify-center space-x-4 
				rounded-full border bg-black-100
				px-10 py-5  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
				border-white/[0.2] 
				 `,
				className
			)}
		>
			{#each navItems as navItem, idx (`link=${idx}`)}
				<a
					href={navItem.link}
					class={cn(
						'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300 '
					)}
				>
					{#if navItem.icon}
						<svelte:component
							this={navItem.icon}
							class="block h-4 w-4 text-neutral-500 dark:text-white sm:hidden"
						/>
						<span
							class="block h-4 w-4 text-neutral-500 dark:text-white sm:hidden"
							>{navItem.icon}</span
						>
					{/if}
					<span class="text-sm sm:block"
						>{navItem.name}</span
					>
				</a>
			{/each}
		</div>
	</Motion>
</AnimatePresence>
