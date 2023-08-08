<script setup lang="ts">
import { ref } from "vue";

const c = () => {
  activeId.value = "laf";
  console.log(1);
};
const activeId = ref<string>("zyh");
</script>

<template>
  <div>
    <ka-button size="lg" type="primary" loading @click="c">laf</ka-button>
    <ka-link type="warning" underline="hover" disabled>1111</ka-link>
    <ka-tabs v-model:activeId="activeId">
      <template #default>
        <ka-tab-item id="laf" label="laf">
          大家好，我叫laf，<span style="color: red">hahahaha</span>
        </ka-tab-item>
        <ka-tab-item id="zyh" label="zyh"> zyh </ka-tab-item>
      </template>
    </ka-tabs>
  </div>
</template>

<style scoped></style>
