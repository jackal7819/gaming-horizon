<script setup>
	import axios from 'axios';

	const URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/orders.json';
	let orders = [];
	let isLoading = true;

	const getOrders = async () => {
		try {
			const data = await axios.get(URL);
			orders = data.data || [];
			console.log(orders.length);
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	};

	getOrders();
</script>

<template>
	<div v-if="!isLoading" class="px-[5vw] py-10 height">
		<h2 class="mb-10 text-2xl font-bold text-center">Orders</h2>
		<div class="flex flex-wrap gap-5">
			<div
				v-for="(order, index) in orders"
				:key="index"
				class="flex-1 p-4 mb-4 border rounded-lg min-w-64"
			>
				<h3 class="font-bold underline underline-offset-4">
					Order {{ index + 1 }}
				</h3>
				<p>Total: {{ order.total }} $</p>
				<ul>
					<li
						v-for="(game, gameIndex) in order.games"
						:key="gameIndex"
					>
						{{ game.title }} - {{ game.price }} $
					</li>
				</ul>
			</div>
			<div v-if="orders.length === 0" class="text-center">
				No orders available
			</div>
		</div>
	</div>
</template>
