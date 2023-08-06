<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "ka-button",
});
const props = withDefaults(
  defineProps<{
    size?: "lg" | "md" | "sm" | "xs";
    type?: "primary" | "info" | "success" | "warning" | "danger";
    circle?: boolean;
    disabled?: boolean;
    block?: boolean;
  }>(),
  {
    size: "md",
    type: "primary",
    circle: false,
    disabled: false,
    block: true,
  }
);

const classes = computed(() => {
  return [
    `ka_btn`,
    `ka_btn-${props.size}`,
    `ka_btn-${props.type}`,
    { "ka_btn-disabled": props.disabled },
    { "ka_btn-circle": props.circle },
    { "ka_btn-block": props.block },
  ];
});
const emit = defineEmits<{
  (event: "click"): void;
}>();
const handleClick = () => {
  if (props.disabled) {
    return;
  }
  emit("click");
};
</script>
<template>
  <button :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>
<style lang="less">
@import "../styles/common.less";
@import "./button.less";
</style>
