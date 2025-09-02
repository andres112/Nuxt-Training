<script setup lang="ts">

</script>

<template>
  <div class="NavBar bg-blue-600">
    <div
      class="NavBar__background container flex justify-between items-center p-4"
    >
      <div class="NavBar__container flex items-baseline gap-4 lg:gap-6">
        <div class="NavBar__logo">
          <NuxtLink to="/" class="NavBar__link text-xl font-bold">
            MyApp
          </NuxtLink>
        </div>
        <div class="NavBar__links">
          <NuxtLink to="/about" class="NavBar__link h6">
            About
          </NuxtLink>
        </div>
      </div>
      <div class="NavBar__menu">
        <button class="btn-secondary cursor-pointer">
          <Icon name="tabler:login" size="1.25rem" />
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
