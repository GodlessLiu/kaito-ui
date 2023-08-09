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

const handleClick = (item: Record<string, any>, event: MouseEvent) => {
  const el = event.currentTarget as HTMLSpanElement;
  if (item.disable === "" || item.disable === true) return;
  // 底部indicator移动
  indicatorTransition(el);
  emit("update:activeId", item.id);
};
onMounted(() => {
  const firstBar = tabBar.value?.children[0] as HTMLSpanElement;
  indicatorWidth.value = firstBar.offsetWidth + "px";
});
const GspanClass = function (item: Record<string, any>) {
  if (item.disable === "" || item.disable === true)
    return ["ka_tabs-tabBar-span", "ka_tabs-tabBar-span-disable"];
  return ["ka_tabs-tabBar-span"];
};
</script>

<template>
  <div class="ka_tabs-tabBar" ref="tabBar">
    <span
      v-for="item in items"
      :key="item.id"
      :class="GspanClass(item)"
      @click="handleClick(item, $event)"
    >
      {{ item.label }}
    </span>
  </div>
  <div
    class="ka_tabs-indicator"
    :style="{
      width: indicatorWidth,
      transform: `translateX(${indicatorTransform})`,
    }"
  ></div>
</template>
