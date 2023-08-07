<script setup lang="ts">
import { ComputedRef, computed, inject } from "vue";
const props = defineProps<{
  id: string;
  label: string;
}>();
defineOptions({
  name: "KaTabItem",
});
const activeId = inject<ComputedRef<string | number | undefined>>("activeId");
const isActive = computed(() => {
  return activeId?.value === props.id;
});
</script>

<template>
  <div v-if="isActive" class="tabs-item-wrapper">
    <slot />
  </div>
</template>
