<template>
	<header
		class="flex justify-between border-b border-slate-400 px-[5vw] py-10"
	>
		<div class="flex items-center gap-5">
			<img src="../assets/gamepad.svg" alt="logo" class="w-20" />
			<div>
				<h2 class="text-xl font-bold uppercase">Gaming Horizon</h2>
				<p>Play your favorite games</p>
			</div>
		</div>
		<ul class="flex items-center gap-5">
			<li class="flex flex-col items-center gap-2">
				<img src="../assets/cart.svg" alt="cart" class="w-8 h-8" />
				<b>1055 $</b>
			</li>
			<li class="flex flex-col items-center gap-2">
				<img src="../assets/heart.svg" alt="favorites" class="w-8 h-8" />
				<b>Favorites</b>
			</li>
			<li class="flex flex-col items-center gap-2">
				<img src="../assets/user.svg" alt="user" class="w-8 h-8" />
				<b>Profile</b>
			</li>
		</ul>
	</header>
</template>
