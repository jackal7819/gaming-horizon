<script setup>
	import plus from '../assets/plus.svg';

	defineProps({
		id: Number,
		title: String,
		price: Number,
		url: String,
		// removeItem: Promise,
	});
	const emit = defineEmits(['removeItem']);
</script>

<template>
	<div
		class="relative flex items-end w-full gap-4 p-5 duration-300 border bg-sky-950 rounded-2xl border-slate-400"
	>
		<img :src="url" alt="game" class="w-20" />
		<div class="flex flex-col justify-between gap-2">
			<img
				:src="plus"
				alt="remove"
				@click="emit('removeItem')"
				class="absolute w-5 h-5 duration-300 rotate-45 cursor-pointer right-2 top-2 hover:scale-125"
			/>
			<p>{{ title }}</p>
			<div class="flex gap-5">
				<p>Price:</p>
				<strong>{{ price }} $</strong>
			</div>
		</div>
	</div>
</template>
