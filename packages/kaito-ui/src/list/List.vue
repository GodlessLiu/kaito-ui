<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
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
  }>(),
  {
    offset: 0,
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

const addScrollEvent = (el: HTMLDivElement) => {
  ScrollEvent = el.addEventListener("scroll", () => {
    isReachBottomBoolean.value = isReachBottom(listEl.value!);
    if (isReachBottomBoolean.value) {
      emit("load");
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
  <div class="ka_list" ref="listEl" style="position: relative">
    <slot />
    <p style="height: 24px; text-align: center">
      <span v-show="isReachBottomBoolean">到底了</span>
    </p>
  </div>
</template>
