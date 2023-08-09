<script setup lang="ts">
import { ref } from "vue";

const c = () => {
  activeId.value = "laf";
  console.log(1);
};
const activeId = ref<string>("test1");
</script>

<template>
  <div>
    <ka-button size="lg" type="primary" loading @click="c">laf</ka-button>
    <ka-link type="warning" underline="hover" disabled>1111</ka-link>
    <ka-tabs v-model:activeId="activeId">
      <template #default>
        <ka-tab-item id="test1" label="test1">
          大家好，我叫test1，<span style="color: red">hahahaha</span>
        </ka-tab-item>
        <ka-tab-item id="test2" label="test2"> test2 </ka-tab-item>
      </template>
    </ka-tabs>
  </div>
</template>

<style scoped></style>
