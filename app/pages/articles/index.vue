<script setup lang="ts">
import type { Article } from '~/interfaces/general';

const { data } = await useFetch<Article[]>('https://jsonplaceholder.typicode.com/posts', {
	method: 'get',
});

const articles = (data.value as Article[]).map(article => ({
	id: article.id,
	slug: article.id.toString(),
	title: article.title,
	description: article.body,
}));
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
