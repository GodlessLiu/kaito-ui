<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
const stepsEl = ref<HTMLDivElement>();
const props = defineProps<{
  value: number;
}>();
defineOptions({
  name: "KaSteps",
});
const emits = defineEmits<{
  (event: "finish"): void;
}>();

const renderFinshed = (els: NodeListOf<Element>, n: any) => {
  for (let index = 0; index <= n.value; index++) {
    const element = els[index];
    element.className += " actived";
  }
};
const renderUnFinshed = (els: NodeListOf<Element>, n: any) => {
  for (let index = n.value + 1; index < els.length; index++) {
    const element = els[index];
    element.className = "ka_step";
  }
};
onMounted(() => {
  const els = stepsEl.value!.querySelectorAll(".ka_step");
  watch(
    props,
    async (n: any, _: any) => {
      renderFinshed(els, n);
      renderUnFinshed(els, n);
      // 如果全部完成 emit
      if (n.value + 1 === els.length) {
        nextTick(() => {
          emits("finish");
        });
      }
    },
    {
      immediate: true,
    }
  );
});
</script>

<template>
  <div class="ka_steps" ref="stepsEl">
    <slot />
  </div>
</template>
<style lang="less">
@import "../styles/common.less";
@import "./steps.less";
</style>
