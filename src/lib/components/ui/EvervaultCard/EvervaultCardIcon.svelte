<script lang="ts">
    import EvervaultCard from "./EvervaultCard.svelte";
    import Icon from "./Icon.svelte";

    export let text:string | undefined = undefined;
</script>

<div
	class="relative flex h-[30rem] flex-col items-start border border-black/[0.2] p-4 w-full dark:border-white/[0.2]"
>
	<Icon class="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
	<Icon class="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
	<Icon class="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
	<Icon class="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

	<EvervaultCard {text} />

</div>