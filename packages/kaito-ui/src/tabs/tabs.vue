<script setup lang="ts">
import { ComputedRef, computed, provide, useSlots } from "vue";
import tabBar from "./tabBar.vue";
defineOptions({
  name: "KaTabs",
});
const props = withDefaults(
  defineProps<{
    activeId: string;
  }>(),
  {}
);

const slots = useSlots();
const slotsItems = computed(() => {
  return slots.default?.().map(({ props: slotProps }) => {
    return {
      id: slotProps?.id,
      label: slotProps?.label,
    };
  });
});

const emit = defineEmits<{
  (event: "update:activeId", value: number | string): void;
}>();

provide<ComputedRef<number | string | undefined>>(
  "activeId",
  computed(() => props.activeId)
);
const handleBarClick = (activeId: string | number) => {
  emit("update:activeId", activeId);
};
</script>

<template>
  <div class="ka_tabs">
    <tabBar
      :items="slotsItems"
      :active-id="activeId"
      @update:active-id="handleBarClick"
    >
    </tabBar>
    <!-- 添加一个navbars -->
    <slot />
  </div>
</template>

<style lang="less">
@import "../styles/common.less";
@import "./tabs.less";
</style>
