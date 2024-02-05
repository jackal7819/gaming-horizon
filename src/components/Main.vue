<script setup>
	import { SearchOutlined } from '@ant-design/icons-vue';
	import Game from './Game.vue';

	defineProps({
		games: Array,
	})
	
	const onClickAdd = (id) => console.log(id);
	const onClickFavorite = (id) => console.log(id);
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
						class="p-2 pl-10 border-2 rounded-lg outline-none focus:border-[#ffd43b] text-lg"
					/>
				</div>
				<select
					name="sort"
					id="sort"
					class="p-2 border-2 rounded-lg outline-none focus:border-[#ffd43b] text-lg"
				>
					<option value="name">By Title</option>
					<option value="price">By Price (low)</option>
					<option value="price">By Price (high)</option>
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
				:onClickAdd="() => onClickAdd(game.id)"
				:onClickFavorite="() => onClickFavorite(game.id)"
			/>
		</div>
	</main>
</template>
