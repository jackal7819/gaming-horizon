<script setup>
	import { inject } from 'vue';
	import CartItem from '../components/CartItem.vue';

	const removeItem = inject('removeItem');
	const { cartGames } = inject('cart');

	const calculateTotal = () => {
		let total = 0;
		let tax = 0;
		cartGames.value.forEach((game) => {
			total += game.price;
		});
		tax = total * 0.2;
		return { total, tax };
	};
</script>

<template>
	<div class="flex flex-col gap-10 px-[5vw] py-10 height">
		<h2 class="text-2xl font-bold text-center">Cart</h2>
		<div class="flex flex-wrap justify-center flex-1 gap-5" v-auto-animate>
			<CartItem
				v-for="game in cartGames"
				:key="game.id"
				:title="game.title"
				:price="game.price"
				:url="game.url"
				@remove-item="() => removeItem(game.id)"
			/>
		</div>
		<div class="flex flex-col w-1/2 gap-5 mx-auto">
			<div class="flex justify-between gap-2">
				<p>Tax 20%:</p>
				<div class="flex-1 border-b border-slate-400"></div>
				<strong>{{ calculateTotal().tax }} $</strong>
			</div>
			<div class="flex justify-between gap-2">
				<p>Total:</p>
				<div class="flex-1 border-b border-slate-400"></div>
				<strong>{{ calculateTotal().total }} $</strong>
			</div>
			<button
				class="w-full py-2 duration-300 bg-blue-900 border rounded-lg border-slate-400 hover:bg-blue-800 active:bg-blue-700 disabled:bg-sky-950"
				:disabled="cartGames.length === 0"
			>
				Place an order
			</button>
		</div>
	</div>
</template>
