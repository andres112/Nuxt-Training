<script setup lang="ts">
const articles = [
	{
		id: 1,
		slug: 'first-article',
		title: 'First Article',
		description: 'This is the first article.',
	},
	{
		id: 2,
		slug: 'second-article',
		title: 'Second Article',
		description: 'This is the second article.',
	},
	{
		id: 3,
		slug: 'third-article',
		title: 'This is the third article',
		description: 'This is the third article.',
	},
	{
		id: 4,
		slug: 'fourth-article',
		title: 'Fourth Article',
		description: 'This is the fourth article.',
	},
	{
		id: 5,
		slug: 'fifth-article',
		title: 'Fifth Article',
		description: 'This is the fifth article.',
	},
	{
		id: 6,
		slug: 'sixth-article',
		title: 'Sixth Article',
		description: 'This is the sixth article.',
	},
];
</script>

<template>
	<div class="container py-8">
		<h1>Articles Page</h1>
		<!-- Cards for 4 articles with title, description, and link to article detail page. -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<NuxtLink
				v-for="article in articles"
				:key="article.id"
				:to="`/articles/${article.slug}`"
				class="block p-4 border rounded"
			>
				<h2 class="font-bold">
					{{ article.title }}
				</h2>
				<p>{{ article.description }}</p>
			</NuxtLink>
		</div>
	</div>
</template>
