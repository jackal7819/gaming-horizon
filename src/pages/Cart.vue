<script setup>
	import { inject } from 'vue';
	import axios from 'axios';
	import CartItem from '../components/CartItem.vue';

	const GAMES_URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/games.json';

	const ORDERS_URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

	const removeItem = inject('removeItem');
	const { games, cartGames } = inject('cart');

	const calculateTotal = () => {
		let total = 0;
		let tax = 0;
		cartGames.value.forEach((game) => {
			total += game.price;
		});
		tax = total * 0.2;
		return { total, tax };
	};

	const placeOrder = async () => {
	try {
		const data = await axios.get(ORDERS_URL);
		const existingOrders = data.data || [];

		const newOrder = {
			games: cartGames.value,
			total: calculateTotal().total,
		};

		games.value.forEach(game => {
            game.isAdded = false;
        });

		existingOrders.push(newOrder);
		await axios.put(GAMES_URL, games.value);
		await axios.put(ORDERS_URL, existingOrders);
		cartGames.value = [];
	} catch (error) {
		console.error(error);
	}
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
				@click="placeOrder"
			>
				Place an order
			</button>
		</div>
	</div>
</template>
