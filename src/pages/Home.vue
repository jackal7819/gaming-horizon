<script setup>
	import { inject } from 'vue';
	import { SearchOutlined } from '@ant-design/icons-vue';
	import Game from '../components/Game.vue';

	const {
		games,
		changeSortCriteria,
		handleSearch,
		toggleCart,
		toggleFavorite,
	} = inject('home');
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
			v-auto-animate
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
