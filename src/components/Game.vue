<template>
	<div
		class="relative duration-300 border cursor-pointer hover:shadow-slate-400 rounded-2xl border-slate-400 w-72 hover:shadow-xl hover:-translate-y-3"
	>
		<img
			src="../assets/favorite.svg"
			alt="favorite"
			class="absolute w-5 h-5 top-5 left-5"
		/>
		<img src="../assets/lords.avif" alt="game" class="rounded-2xl" />
		<div class="p-5">
			<p>Lords of The Fallen</p>
			<div class="flex justify-between">
				<div class="flex gap-5">
					<p>Price:</p>
					<strong>65 $</strong>
				</div>
				<img src="../assets/plus.svg" alt="favorite" class="w-5 h-5" />
				<img
					src="../assets/check.svg"
					alt="favorite"
					class="hidden w-5 h-5"
				/>
			</div>
		</div>
	</div>
</template>
