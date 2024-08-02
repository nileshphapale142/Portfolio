<script>
	import GridAndDotBackgrounds from './ui/GridAndDotBackground/GridAndDotBackgrounds.svelte';
	import MagicButton from './ui/MagicButton/MagicButton.svelte';
	import Spotlight from './ui/Spotlight/Spotlight.svelte';
	import TextGenerateEffect from './ui/TextGenerateEffect/TextGenerateEffect.svelte';
</script>

<div class="pb-20 pt-36">
	<div>
		<Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-scree" fill="white" />
		<Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
		<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
	</div>

	<GridAndDotBackgrounds />

	<div class="flex justify-center relative my-20 z-10">
		<div
			class="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center
        justify-center"
		>
			<h2
				class="uppercase tracking-widest text-xs text-center text-blue-100
            max-w-80"
			>
				Dynamic Magic in Web
			</h2>

			<TextGenerateEffect
				className="text-center text-[40px] md:text-5xl lg:text-6xl"
				words="Transforming Concepts into Seamless User Experiences"
			/>

            <p class="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl
            text-blue-100">
                Hi, I&apos;m Nilesh, a Full Stack Web Developer based in India. 
            </p>

            <a href="#projects">
                <MagicButton name="Show My Work"/>
            </a>
		</div>
	</div>
</div>
