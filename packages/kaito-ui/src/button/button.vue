<script setup lang="ts">
import { computed } from "vue";
import { Size, Types } from "./interface";
defineOptions({
  name: "KaButton",
});
const props = withDefaults(
  defineProps<{
    size?: Size;
    type?: Types;
    circle?: boolean;
    disabled?: boolean;
    block?: boolean;
    loading?: boolean;
    color?: string;
    textColor?: string;
  }>(),
  {
    size: "md",
    type: "primary",
    circle: false,
    disabled: false,
    block: true,
    loading: false,
    color: "",
    textColor: "",
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
  <button
    :class="classes"
    :style="{ backgroundColor: color, color: textColor }"
    @click="handleClick"
  >
    <span v-if="loading"> loading...</span>
    <span v-else>
      <slot></slot>
    </span>
  </button>
</template>
<style lang="less">
@import "../styles/common.less";
@import "./button.less";
</style>
