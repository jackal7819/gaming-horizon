<script setup>
	import { inject, computed } from 'vue';
	import Game from '../components/Game.vue';

	const {
		games,
		toggleCart,
		toggleFavorite,
	} = inject('home');

    const favoriteGames = computed(() => games.value.filter(game => game.isFavorite));
</script>

<template>
	<div class="px-[5vw] py-10 height">
		<h2 class="mb-10 text-2xl font-bold text-center">Favorites</h2>
		<div
			class="grid gap-10 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			v-auto-animate
		>
			<Game
				v-for="game in favoriteGames"
				:key="game.id"
				v-bind="game"
				:toggleCart="() => toggleCart(game.id)"
				:toggleFavorite="() => toggleFavorite(game.id)"
			/>
		</div>
	</div>
</template>
