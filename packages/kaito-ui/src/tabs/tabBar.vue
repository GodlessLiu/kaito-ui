<script setup lang="ts">
defineProps<{
  activeId: string | number;
  items?: Array<Record<string, string>>;
}>();

const emit = defineEmits<{
  (event: "update:activeId", value: number | string): void;
}>();

const handleClick = (activeId: string | number) => {
  emit("update:activeId", activeId);
};
</script>

<template>
  <div class="ka_tabs-tabBar">
    <span v-for="item in items" :key="item.id" @click="handleClick(item.id)">
      {{ item.label }}
    </span>
  </div>
</template>
