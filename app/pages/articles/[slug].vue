<script setup lang="ts">
const route = useRoute();
const articleSlug = route.params.slug as string;
</script>

<template>
	<div>
		<h1>{{ articleSlug }}</h1>
	</div>
</template>
