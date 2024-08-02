<script>
	import { projects } from '$lib/data';
	import PinContainer from './ui/ThreeDPin/PinContainer.svelte';
</script>

<div class="py-20" id="projects">
	<h1 class=" heading">
		A small selection of {' '}
		<span class="text-purple-200">recent projects</span>
	</h1>
	<div
		class="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"
	>
		{#each projects as { id, title, des, img, iconLists, link }}
			<div
				class="lg:min-h-[32.5rem] flex items-center justify-center
                w-[80vw] sm:h-[41rem] h-[32rem] sm:w-[570px]"
			>
				<PinContainer
					className="text-white"
					title={link}
					href={link}
				>
					<div
						class="relative flex items-center justify-center
                        w-[80vw] overflow-hidden lg:h-[30vh] mb-10
                        sm:w-[570px] sm:h-[40vh] h-[30vh] "
					>
						<div
							class="relative w-full h-full overflow-hidden
                        lg:rounded-xl bg-[#13162d]"
						>
							<img src={'/bg.png'} alt="bg-img" />
						</div>
						<div class="absolute">
							<img
								src={img}
								alt={title}
								class="z-10 relative bottom-0"
							/>
						</div>
					</div>
					<h1
						class="font-bold lg:text-2xl md:text-xl text-base
                    line-clamp-1 px-2"
					>
						{title}
					</h1>
					<p
						class="lg:text-xl lg:font-normal font-light text-sm line-clamp-5 px-2"
					>
						{des}
					</p>
					<div
						class="flex items-center justify-between mt-7 mb-3 px-2"
					>
						<div class="flex items-center">
							{#each iconLists as icon, idx}
								<div
									class="border border-white/[0.2] rounded-full
                                    bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center
                                     items-center"
									style={`transform: translateX(-${5 * idx * 2}px)`}
								>
									<img src={icon} alt={icon} class="p-2" />
								</div>
							{/each}
						</div>
						<div class="flex justify-center items-center">
							<p
								class="flex lg:text-xl md:text-xs text-sm text-purple-200"
							>
								Check Live Site
							</p>
						</div>
					</div>
				</PinContainer>
			</div>
		{/each}
	</div>
</div>
