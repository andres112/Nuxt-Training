<script setup lang="ts">
// ...
</script>

<template>
	<div>
		<h1 class="text-3xl font-bold underline">
			Welcome to Nuxt 4!
		</h1>
		<p>This is the default page.</p>
		<NuxtLink
			to="/about"
			class="btn-primary"
		>
			Go to About Page
		</NuxtLink>
	</div>
</template>
