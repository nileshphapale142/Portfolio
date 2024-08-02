<script lang="ts">
	import { cn } from '$lib/utils';
	import GradientAnimation from '../GradientAnimation/GradientAnimation.svelte';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined =
		undefined;
	export let description: string | HTMLElement | undefined =
		undefined;
	export let img: string;
	export let titleClassName: string;
	export let imgClassName: string;
	export let spareImg: string;
	export let id: number;
</script>

<div
	class={cn(
		`group/bento flex row-span-1 flex-col justify-between space-y-4 rounded-3xl relative border border-white/[0.1] 
		bg-white shadow-input
		transition duration-200 hover:shadow-xl dark:border-white/[0.2] 
		dark:bg-black dark:shadow-none overflow-hidden`,
		className
	)}
	style="background: rgb(4,7,29);
			background: linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%);"
>
	<div
		class={`${id === 6 && 'flex justify-center h-full '} ${id === 3 && ' h-full '} overflow-hidden`}
	>
		<div class="w-full h-full absolute">
			{#if img}
				<img
					src={img}
					alt={img}
					width="100%"
					height="100%"
					class={cn(
						imgClassName,
						'object-cover object-center'
					)}
				/>
			{/if}
		</div>
		<div
			class={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}
		>
			{#if spareImg}
				<img
					src={spareImg}
					alt={spareImg}
					class="object-cover object-center w-full h-full"
				/>
			{/if}
		</div>

		{#if id === 6}
			<GradientAnimation/>
		{/if}

		<div
			class={cn(
				titleClassName,
				`group-hover/bento:translate-x-2 transition 
		duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
			)}
		>
			<div
				class="font-sans text-xm font-extralight text-neutral-600 dark:text-neutral-300
			md:text-xs lg:text-base z-10"
			>
				{description}
			</div>
			<div
				class="lg:text-3xl max-w-96 z-10 font-sans font-bold text-neutral-600
				dark:text-neutral-200 text-lg"
			>
				{title}
			</div>

			{#if id === 3}
				<div
					class="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 text-blue-200"
				>
					<div class="flex flex-col gap-3 lg:gap-8">
						{#each ['ReactJs', 'NextJs', 'TailwindCss'] as tech}
							<span
								class="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base
					opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
							>
								{tech}
							</span>
						{/each}
						<span class="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>

						
					</div>
					<div class="flex flex-col gap-3 lg:gap-8">
						<span class="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
						{#each ['NestJs', 'PostgreSQL', 'Prisma'] as tech}
							<span
								class="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base
					opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/if}
			{#if id  == 6}
			<div class="mt-5 relative">
				<div class={`absolute -bottom-5 right-0`}></div>
			</div>
			{/if}
		</div>
	</div>
</div>
