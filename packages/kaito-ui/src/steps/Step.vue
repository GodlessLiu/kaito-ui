<script setup lang="ts">
defineOptions({
  name: "KaStep",
});
</script>

<template>
  <div class="ka_step">
    <div class="ka_step-content">
      <div class="ka_step-content-circle"></div>
      <div class="ka_step-content-line"></div>
    </div>
    <slot />
  </div>
</template>
