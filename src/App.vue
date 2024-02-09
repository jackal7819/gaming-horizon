<script setup>
	import { ref, onMounted, provide } from 'vue';
	import axios from 'axios';
	import Header from './components/Header.vue';

	const games = ref([]);
	const cartGames = ref([]);
	const calculateTotalRef = ref({tax: 0, total: 0});
	let originalGames = [];
	const GAMES_URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/games.json';

	const fetchItems = async () => {
		try {
			const { data } = await axios.get(GAMES_URL);
			originalGames = data;
			games.value = sortGames(data, 'title');
			updateCartGames();
			calculateTotalRef.value = calculateTotal();
		} catch (error) {
			console.log(error);
		}
	};

	const updateDatabase = async () => {
		try {
			await axios.put(GAMES_URL, games.value );
			console.log('error');
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
		return { total, tax };
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
		calculateTotalRef.value = calculateTotal();
	};

	const toggleFavorite = async (gameId) => {
		const game = games.value.find((game) => game.id === gameId);
		game.isFavorite = !game.isFavorite;
		await updateDatabase();
	};

	const removeItem = async (gameId) => {
		const game = games.value.find((game) => game.id === gameId);
		game.isAdded = false;
		await updateDatabase();
		updateCartGames();
		calculateTotalRef.value = calculateTotal();
	};	

	provide('removeItem', removeItem);
	provide('home', {
		games,
		changeSortCriteria,
		handleSearch,
		toggleCart,
		toggleFavorite,
	});
	provide('cart', {
		games,
		cartGames,
		calculateTotalRef,
	});

	onMounted(fetchItems);
</script>

<template>
	<div class="min-h-screen antialiased text-slate-400 bg-slate-900">
		<div class="mx-auto shadow-2xl shadow-slate-800 max-w-screen-2xl">
			<Header :total="calculateTotal().total" />
			<router-view></router-view>
		</div>
	</div>
</template>
