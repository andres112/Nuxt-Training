<script setup lang="ts">
// ...
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
