<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
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
onMounted(() => {
  const els = stepsEl.value!.querySelectorAll(".ka_step");
  watch(
    props,
    async (n: any, _: any) => {
      for (let index = 0; index <= n.value; index++) {
        const element = els[index];
        element.className += " actived";
      }
      for (let index = n.value + 1; index < els.length; index++) {
        const element = els[index];
        element.className = "ka_step";
      }
      if (n.value + 1 === els.length) {
        emits("finish");
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
