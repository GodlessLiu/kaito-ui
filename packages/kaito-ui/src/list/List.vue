<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from "vue";
let containerHeight: number;
let ScrollEvent: any;
const listEl = ref<HTMLDivElement | null>(null);
const isReachBottomBoolean = ref<boolean>(false);
defineOptions({
  name: "KaList",
});
const props = withDefaults(
  defineProps<{
    offset?: number | string;
    height?: number;
    finished?: boolean;
    loading?: boolean;
    loadingText?: string;
    finishText?: string;
  }>(),
  {
    offset: 0,
    height: 200,
    finished: false,
    loading: false,
    loadingText: "loading...",
    finishText: "finished",
  }
);
const emit = defineEmits<{
  (event: "load"): void;
}>();

const isReachBottom = (el: HTMLDivElement) => {
  const scrollheight = el.scrollHeight;
  const scrollTop = el.scrollTop;
  return (
    Math.floor(scrollheight) -
      Math.ceil(scrollTop) -
      Math.ceil(containerHeight + 0.5) <=
    parseInt(props.offset as string)
  );
};

// 可以有效的防止多次触发load
const check = async () => {
  await nextTick();
  if (props.loading || props.finished || !isReachBottom(listEl.value!)) return;
  emit("load");
};

const addScrollEvent = (el: HTMLDivElement) => {
  ScrollEvent = el.addEventListener("scroll", () => {
    isReachBottomBoolean.value = isReachBottom(listEl.value!);
    if (isReachBottomBoolean.value) {
      check();
    }
  });
};

onMounted(() => {
  containerHeight = listEl.value?.clientHeight!;
  addScrollEvent(listEl.value!);
});
onUnmounted(() => {
  listEl.value!.removeEventListener("scroll", ScrollEvent);
});
</script>

<template>
  <div class="ka_list" ref="listEl" :style="{ height: `${props.height}px` }">
    <slot />
    <p style="text-align: center">
      <span v-show="props.loading">{{ props.loadingText }}</span>
      <span v-show="!props.loading && finished">{{ props.finishText }}</span>
    </p>
  </div>
</template>
<style lang="less">
@import "../styles/common.less";
@import "./list.less";
</style>
