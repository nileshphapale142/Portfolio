<script>

	import { socialMedia, workExperience } from "$lib/data";
	import Button from "./ui/MovingBorder/Button.svelte";

</script>
<div class="py-20" id="experience">
    <h1 class="heading">
		My
		<span class="text-purple-200">work experience</span>
	</h1>
    <div class="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {#each workExperience as exp}
        <Button
        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
        duration={Math.floor(Math.random() * 10000)}>
            <div class="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5
            lg:p-10 gap-2">
                <img src={exp.thumbnail} alt={exp.thumbnail}
                class="lg:w-32 md:w-20 w-16"/>
                <div class="lg:ms-5">
                    <h1 class="text-start text-xl md:text-2xl font-bold">
                        {exp.title}
                    </h1>
                    <p class="text-start text-white mt-3 font-semibold">
                        {exp.desc}
                    </p>
                </div>
            </div>
        </Button>
        {/each}
    </div>
</div>