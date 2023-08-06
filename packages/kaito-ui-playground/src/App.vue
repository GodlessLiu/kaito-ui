<script setup lang="ts">
const c = () => {
  console.log(1);
};
</script>

<template>
  <div>
    <kaButton size="lg" type="primary" disabled block @click="c">b</kaButton>
  </div>
</template>

<style scoped></style>
