<script setup lang="ts">
import { onMounted, ref } from "vue";

const indicatorWidth = ref<string>("0px");
const indicatorTransform = ref<string>("0px");
const tabBar = ref<HTMLDivElement>();
defineProps<{
  activeId: string | number;
  items?: Array<Record<string, string>>;
}>();

const emit = defineEmits<{
  (event: "update:activeId", value: number | string): void;
}>();

const indicatorTransition = (el: HTMLSpanElement) => {
  indicatorWidth.value = el.offsetWidth + "px";
  indicatorTransform.value = el.offsetLeft + "px";
};

const handleClick = (activeId: string | number, event: MouseEvent) => {
  const el = event.currentTarget as HTMLSpanElement;
  // 底部indicator移动
  indicatorTransition(el);
  emit("update:activeId", activeId);
};
onMounted(() => {
  const firstBar = tabBar.value?.children[0] as HTMLSpanElement;
  indicatorWidth.value = firstBar.offsetWidth + "px";
});
</script>

<template>
  <div class="ka_tabs-tabBar" ref="tabBar">
    <span
      v-for="item in items"
      :key="item.id"
      @click="handleClick(item.id, $event)"
    >
      {{ item.label }}
    </span>
    <div
      class="ka_tabs-indicator"
      :style="{
        width: indicatorWidth,
        transform: `translateX(${indicatorTransform})`,
      }"
    ></div>
  </div>
</template>
