<script setup lang="ts">
defineProps<{
  data: {
    title: string;
    subtitle: string;
    link: {
      label: string;
      href: string;
      icon: string;
    };
  };
}>();
</script>

<template>
  <div class="Hero flex flex-col items-center justify-center gap-4 p-6 min-h-96">
    <h1 class="Hero__title">
      {{ data.title }}
    </h1>
    <p class="Hero__subtitle">
      {{ data.subtitle }}
    </p>
    <NuxtLink :to="data.link.href" class="Hero__btn btn-primary my-6">
      <!-- Source: https://icones.js.org/collection/tabler -->
      <Icon :name="data.link.icon" size="1.5rem" />
      {{ data.link.label }}
    </NuxtLink>
  </div>
</template>

<style scoped></style>
