<script setup>
	import { ref, onMounted } from 'vue';
	import axios from 'axios';
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';
	import Cart from './components/Cart.vue';

	const games = ref([]);
	const cartGames = ref([]);
	const cartOpen = ref(false);
	let originalGames = [];
	const URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/.json';

	const fetchItems = async () => {
		try {
			const { data } = await axios.get(URL);
			originalGames = data.games;
			games.value = sortGames(data.games, 'title');
			updateCartGames();
			calculateTotal();
		} catch (error) {
			console.log(error);
		}
	};

	const updateDatabase = async () => {
		try {
			await axios.put(URL, { games: games.value });
		} catch (error) {
			console.log(error);
		}
	};

	const updateCartGames = () => {
		cartGames.value = games.value.filter((game) => game.isAdded);
	};

	const calculateTotal = () => {
		let total = 0;
		cartGames.value.forEach((game) => {
			total += game.price;
		});
		const tax = total * 0.2;
		const totalPrice = total + tax;
		return { total, tax, totalPrice };
	};

	const sortGames = (games, sortBy) => {
		switch (sortBy) {
			case 'title':
				return games.sort((a, b) => a.title.localeCompare(b.title));
			case 'priceAsc':
				return games.sort((a, b) => a.price - b.price);
			case 'priceDesc':
				return games.sort((a, b) => b.price - a.price);
			default:
				return games;
		}
	};

	const changeSortCriteria = (event) => {
		const sortBy = event.target.value;
		games.value = sortGames(games.value, sortBy);
	};

	const handleSearch = (event) => {
		const searchText = event.target.value.toLowerCase();
		games.value = originalGames.filter((game) =>
			game.title.toLowerCase().includes(searchText)
		);
	};

	const toggleCart = async (gameId) => {
		const game = games.value.find((game) => game.id === gameId);
		game.isAdded = !game.isAdded;
		await updateDatabase();
		updateCartGames();
		calculateTotal();
	};

	const toggleFavorite = async (gameId) => {
		const game = games.value.find((game) => game.id === gameId);
		game.isFavorite = !game.isFavorite;
		await updateDatabase();
	};

	const closeCart = () => (cartOpen.value = false);
	const openCart = () => (cartOpen.value = true);

	onMounted(fetchItems);
</script>

<template>
	<div class="min-h-screen antialiased text-slate-400 bg-slate-900">
		<Cart
			v-if="cartOpen"
			:closeCart="closeCart"
			:cartGames="cartGames"
			:totalPrice="calculateTotal().totalPrice"
			:total="calculateTotal().total"
			:tax="calculateTotal().tax"
		/>
		<div class="mx-auto shadow-xl shadow-slate-800 max-w-screen-2xl">
			<Header
				:openCart="openCart"
				:totalPrice="calculateTotal().totalPrice"
			/>
			<Main
				:games="games"
				:changeSortCriteria="changeSortCriteria"
				:handleSearch="handleSearch"
				:toggleCart="toggleCart"
				:toggleFavorite="toggleFavorite"
			/>
		</div>
	</div>
</template>
