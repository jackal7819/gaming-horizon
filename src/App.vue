<script setup>
	import Cart from './components/Cart.vue';
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';
</script>

<template>
	<div class="min-h-screen antialiased text-slate-400 bg-slate-900">
		<Cart />
		<div class="mx-auto shadow-xl shadow-slate-800 max-w-screen-2xl">
			<Header />
			<Main />
		</div>
	</div>
</template>
