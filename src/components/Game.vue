<script setup>
	import favorite from '../assets/favorite.svg';
	import plus from '../assets/plus.svg';
	import check from '../assets/check.svg';

	defineProps({
		id: Number,
		title: String,
		price: Number,
		url: String,
	});
</script>

<template>
	<div
		class="relative duration-300 border cursor-pointer hover:shadow-slate-400 rounded-2xl border-slate-400 w-72 hover:shadow-xl hover:-translate-y-3"
	>
		<img
			:src="favorite"
			alt="favorite"
			class="absolute w-5 h-5 duration-300 top-5 left-5 hover:scale-125"
		/>
		<img :src="url" alt="game" class="rounded-2xl" />
		<div class="p-5">
			<p>{{ title }}</p>
			<div class="flex justify-between">
				<div class="flex gap-5">
					<p>Price:</p>
					<strong>{{ price }} $</strong>
				</div>
				<img
					:src="plus"
					alt="favorite"
					class="w-5 h-5 duration-300 hover:scale-125"
				/>
				<img
					:src="check"
					alt="favorite"
					class="hidden w-5 h-5"
				/>
			</div>
		</div>
	</div>
</template>
