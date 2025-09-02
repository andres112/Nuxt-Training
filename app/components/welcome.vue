<script setup lang="ts">

</script>

<template>
	<div>
		<h1 class="Welcome__title">
			Welcome to Nuxt 4!
		</h1>
		<p>This is the default page.</p>
		<NuxtLink to="/about" class="Welcome__btn">
			Go to About Page
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
.Welcome {
	&__title {
		@apply text-3xl font-bold underline;
	}
	&__btn {
		@apply inline-block rounded px-4 py-2 bg-blue-600 text-white hover:bg-blue-700;
	}
}
</style>
