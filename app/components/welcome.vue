<script setup lang="ts">

</script>

<template>
	<div class="Welcome flex flex-col items-center justify-center min-h-screen gap-4">
		<h1 class="Welcome__title">
			Welcome to Nuxt 4!
		</h1>
		<p>This is the default page.</p>
		<NuxtLink
			to="/about"
			class="Welcome__btn btn-primary"
		>
			<Icon name="tdesign:bad-laugh" class="text-white text-2xl" />
			Go to About Page
		</NuxtLink>
	</div>
</template>

<style scoped>
</style>
