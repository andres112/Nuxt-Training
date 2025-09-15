<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
</script>

<template>
	<div class="container py-8">
		<h1>{{ slug }}</h1>
		<p>This is the article detail page for the article with slug: {{ slug }}</p>
		<NuxtLink to="/articles" class="text-blue-600 underline">
			<Icon name="tabler:anchor" size="1.5rem" />
			Back to Articles
		</NuxtLink>
	</div>
</template>
