<script setup>
	import Game from './Game.vue';
	import { games } from '../data';
</script>

<template>
	<main class="px-[5vw] py-10">
		<h2 class="mb-10 text-xl uppercase">All games</h2>
		<div
			class="grid gap-10 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			<Game v-for="game in games" :key="game.id" v-bind="game" />
		</div>
	</main>
</template>
