<script setup lang="ts">
import { ref, watch } from "vue";

defineOptions({
  name: "KaSwitch",
});
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    disable?: boolean;
  }>(),
  {
    modelValue: false,
    disable: false,
  }
);
const emits = defineEmits(["update:modelValue"]);
const inputValue = ref<boolean>(props.modelValue);
watch(inputValue, (n: boolean, _: boolean) => {
  emits("update:modelValue", n);
});
const handleClick = (event: MouseEvent) => {
  if (props.disable) event.preventDefault();
};
</script>

<template>
  <label for="ka_switch" @click="handleClick">
    <input type="checkbox" v-model="inputValue" id="ka_switch" />
    <div class="toggle-finish">
      <div class="cookie-finish">
        <slot></slot>
      </div>
    </div>
  </label>
</template>
<style lang="less">
@import "../styles/common.less";
@import "./switch.less";
</style>
