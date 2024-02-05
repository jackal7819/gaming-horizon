<script setup>
	import { onMounted, ref } from 'vue';
	import axios from 'axios';
	// import Cart from './components/Cart.vue';
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';
	// import { games } from './data';

	const URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/.json';
	const games = ref([]);

	onMounted(async () => {
		try {
			const { data } = await axios.get(URL);
			games.value = data.games;
		} catch (error) {
			console.log(error);
		}
	});
	
</script>

<template>
	<div class="min-h-screen antialiased text-slate-400 bg-slate-900">
		<!-- <Cart /> -->
		<div class="mx-auto shadow-xl shadow-slate-800 max-w-screen-2xl">
			<Header />
			<Main :games="games" />
		</div>
	</div>
</template>
