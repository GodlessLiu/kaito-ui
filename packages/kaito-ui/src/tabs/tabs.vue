<script setup lang="ts">
import { ComputedRef, computed, provide } from "vue";

defineOptions({
  name: "KaTabs",
});
const props = withDefaults(
  defineProps<{
    activeId: string;
  }>(),
  {}
);

provide<ComputedRef<number | string | undefined>>(
  "activeId",
  computed(() => props.activeId)
);
</script>

<template>
  <div>
    <!-- 添加一个navbars -->
    <slot />
  </div>
</template>

<style lang="less">
@import "../styles/common.less";
@import "./tabs.less";
</style>
