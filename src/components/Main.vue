<script setup>
	import { SearchOutlined } from '@ant-design/icons-vue';
	import { onMounted, ref } from 'vue';
	import axios from 'axios';
	import Game from './Game.vue';

	const URL =
		'https://gaming-horizon-default-rtdb.europe-west1.firebasedatabase.app/.json';

	const games = ref([]);
	let originalGames = [];

	const fetchItems = async () => {
		try {
			const { data } = await axios.get(URL);
			originalGames = data.games;
			games.value = sortGames(data.games, 'title');
		} catch (error) {
			console.log(error);
		}
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
	};

	const toggleFavorite = async (gameId) => {
		const game = games.value.find((game) => game.id === gameId);
		game.isFavorite = !game.isFavorite;
	};

	onMounted(fetchItems);
</script>

<template>
	<main class="px-[5vw] py-10">
		<div
			class="flex flex-wrap items-center justify-center gap-5 mb-10 md:justify-between"
		>
			<h2 class="text-xl uppercase">The best games</h2>
			<div class="flex flex-wrap items-center justify-center gap-5">
				<div class="relative">
					<SearchOutlined
						class="text-3xl text-[#ffd43b] absolute left-1 top-1"
					/>
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
						@input="handleSearch"
						class="p-2 pl-10 border-2 rounded-lg outline-none focus:border-[#ffd43b] text-lg"
					/>
				</div>
				<select
					name="sort"
					id="sort"
					@change="changeSortCriteria"
					class="p-2 border-2 rounded-lg outline-none focus:border-[#ffd43b] text-lg"
				>
					<option value="title">By Title</option>
					<option value="priceAsc">By Price (low)</option>
					<option value="priceDesc">By Price (high)</option>
				</select>
			</div>
		</div>
		<div
			class="grid gap-10 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			<Game
				v-for="game in games"
				:key="game.id"
				v-bind="game"
				:toggleCart="() => toggleCart(game.id)"
				:toggleFavorite="() => toggleFavorite(game.id)"
			/>
		</div>
	</main>
</template>
