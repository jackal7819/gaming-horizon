<script setup>
	import axios from 'axios';
	import { ref } from 'vue';

	const URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

	const orders = ref([]);

	const getOrders = async () => {
		try {
			const data = await axios.get(URL);
			orders.value = data.data || [];
		} catch (error) {
			console.error(error);
		}
	};
	getOrders();
</script>

<template>
	<div class="px-[5vw] py-10 height">
		<h2 class="mb-10 text-2xl font-bold text-center">Orders</h2>
		<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div
				v-for="(order, index) in orders"
				:key="index"
				class="w-full p-4 mb-4 border rounded-lg h-44"
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
