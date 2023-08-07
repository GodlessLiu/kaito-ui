<script setup lang="ts">
import { computed } from "vue";
import { Target, Types, UnderType } from "./interface";
defineOptions({
  name: "KaLink",
});

const props = withDefaults(
  defineProps<{
    type?: Types;
    color?: string;
    disabled?: boolean;
    underline?: UnderType;
    href?: string;
    target?: Target;
  }>(),
  {
    type: "primary",
    color: "",
    disabled: false,
    underline: "show",
    href: "#",
    target: "_self",
  }
);

const classes = computed(() => {
  return [
    "ka_link",
    `ka_link-${props.type}`,
    { "ka_link-disabled": props.disabled },
    `ka_link-underline-${props.underline}`,
  ];
});
const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault();
  }
  return;
};
</script>

<template>
  <a
    :href="href"
    :target="target"
    :class="classes"
    @click="handleClick"
    :style="{ color: color }"
  >
    <slot></slot>
  </a>
</template>
<style lang="less">
@import "../styles/common.less";
@import "./link.less";
</style>
