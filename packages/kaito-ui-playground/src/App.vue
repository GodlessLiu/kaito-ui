<script setup lang="ts">
const c = () => {
  console.log(1);
};
</script>

<template>
  <div>
    <ka-button size="lg" disabled type="primary" block loading @click="c"
      >b</ka-button
    >
    <ka-link type="warning" underline="hover">1111</ka-link>
  </div>
</template>

<style scoped></style>
