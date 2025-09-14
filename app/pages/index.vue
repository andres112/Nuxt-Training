<script setup lang="ts">
// Using useHead to set SEO metadata for the Home page
useHead({
	title: 'Home Page',
	meta: [
		{
			name: 'description',
			content: 'This is the home page of our Nuxt.',
		},
	],
});
</script>

<template>
	<BlocksHero
		:data="{
			title: 'Home Page',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.',
			link: {
				label: 'Go to About Page',
				href: '/about',
				icon: 'tabler:alien',
			},
		}"
	/>
</template>
