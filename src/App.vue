<script setup>
	import { ref } from 'vue';
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';
	import Cart from './components/Cart.vue';

	const cartOpen = ref(false);
	const closeCart = () => (cartOpen.value = false);
	const openCart = () => (cartOpen.value = true);
</script>

<template>
	<div class="min-h-screen antialiased text-slate-400 bg-slate-900">
		<Cart v-if="cartOpen" :closeCart="closeCart" />
		<div class="mx-auto shadow-xl shadow-slate-800 max-w-screen-2xl">
			<Header :openCart="openCart" />
			<Main />
		</div>
	</div>
</template>
