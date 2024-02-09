<script setup>
	import gamepad from '../assets/gamepad.svg';
	import cart from '../assets/cart.svg';
	import heart from '../assets/heart.svg';
	import user from '../assets/user.svg';

	defineProps({
		total: Number,
	});
</script>

<template>
	<header
		class="flex md:justify-between border-b border-slate-400 px-[5vw] py-10 flex-col md:flex-row justify-center items-center gap-5"
	>
		<div class="flex items-center gap-5">
			<router-link to="/"
				><img
					:src="gamepad"
					alt="logo"
					class="w-20 duration-300 hover:scale-105"
			/></router-link>
			<div>
				<h2 class="text-xl font-bold text-center uppercase">
					Gaming Horizon
				</h2>
				<p class="text-center">Play your favorite games</p>
			</div>
		</div>
		<ul class="flex items-center gap-5">
			<li class="flex flex-col items-center gap-2">
				<router-link to="/cart">
					<img
						:src="cart"
						alt="cart"
						class="w-8 h-8 duration-300 cursor-pointer hover:scale-125"
				/></router-link>
				<b>{{ total }} $</b>
			</li>
			<li class="flex flex-col items-center gap-2">
				<router-link to="/favorites">
					<img
						:src="heart"
						alt="favorites"
						class="w-8 h-8 duration-300 hover:scale-125"
				/></router-link>
				<b>Favorites</b>
			</li>
			<li class="flex flex-col items-center gap-2">
				<router-link to="/profile">
					<img
						:src="user"
						alt="user"
						class="w-8 h-8 duration-300 hover:scale-125"
				/></router-link>
				<b>Orders</b>
			</li>
		</ul>
	</header>
</template>
