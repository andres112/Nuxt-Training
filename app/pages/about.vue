<script setup lang="ts">
// Using useSeoMeta composable to set SEO metadata
useSeoMeta({
	title: 'About Us',
	description: 'This is the about page of our Nuxt 4 application.',
});
</script>

<template>
	<div class="AboutPage container flex flex-col items-center justify-center gap-4">
		<BlocksHero
			:data="{
				title: 'About Us',
				subtitle: 'This is the about page of our Nuxt 4 application.',
				link: {
					label: 'Go to Home Page',
					href: '/',
					icon: 'tabler:home',
				},
			}"
		/>
	</div>
</template>

<style scoped>
.AboutPage {
	padding-block: 1rem;
}
</style>
