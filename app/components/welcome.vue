<script setup lang="ts">

</script>

<template>
	<div class="Welcome flex flex-col items-center justify-center min-h-screen gap-4">
		<h1 class="Welcome__title text-4xl font-bold underline">
			Welcome to Nuxt 4!
		</h1>
		<p>This is the default page.</p>
		<NuxtLink
			to="/about"
			class="Welcome__btn inline-block rounded px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
		>
			Go to About Page
		</NuxtLink>
	</div>
</template>

<style scoped>
.Welcome {
}
</style>
