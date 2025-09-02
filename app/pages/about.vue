<template>
	<div class="AboutPage container flex flex-col items-center justify-center min-h-screen gap-4">
		<h2>
			AboutPage This Page
		</h2>
		<NuxtLink to="/" class="btn-primary">
			<!-- Source: https://icones.js.org/collection/tabler -->
			<Icon name="tabler:building-airport" class="text-white text-3xl" />
			Go to Home Page
		</NuxtLink>
	</div>
</template>

<style scoped>
.AboutPage {
	padding-block: 1rem;
}
</style>
