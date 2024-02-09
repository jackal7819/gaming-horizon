<script setup>
	import { inject } from 'vue';
	import CartItem from './CartItem.vue';

	defineProps({
		closeCart: Function,
		cartGames: Array,
		total: Number,
		tax: Number,
	});

	const removeItem = inject('removeItem');
</script>

<template>
	<div
		class="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-60"
	></div>
	<div
		class="fixed right-0 z-20 flex flex-col h-full gap-10 p-10 bg-blue-950 w-80 sm:w-96"
	>
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">Cart</h2>
			<button
				class="px-8 py-2 duration-300 bg-blue-900 border rounded-lg border-slate-400 hover:bg-blue-800 active:bg-blue-700"
				@click="closeCart"
			>
				Back
			</button>
		</div>
		<div class="flex flex-col flex-1 gap-5 overflow-auto" v-auto-animate>
			<CartItem
				v-for="game in cartGames"
				:key="game.id"
				:title="game.title"
				:price="game.price"
				:url="game.url"
				@remove-item="() => removeItem(game.id)"
			/>
		</div>
		<div class="flex flex-col gap-5">
			<div class="flex justify-between gap-2">
				<p>Tax 20%:</p>
				<div class="flex-1 border-b border-slate-400"></div>
				<strong>{{ tax }} $</strong>
			</div>
			<div class="flex justify-between gap-2">
				<p>Total:</p>
				<div class="flex-1 border-b border-slate-400"></div>
				<strong>{{ total }} $</strong>
			</div>
			<button
				class="w-full py-2 duration-300 bg-blue-900 border rounded-lg border-slate-400 hover:bg-blue-800 active:bg-blue-700 disabled:bg-sky-950"
				:disabled="cartGames.length === 0"
				@click="closeCart"
			>
				Place an order
			</button>
		</div>
	</div>
</template>
