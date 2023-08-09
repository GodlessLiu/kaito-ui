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
    <p>BUTTON</p>
    <ka-button size="lg" type="primary" loading @click="c">laf</ka-button>
    <br />
    <p>LINK</p>
    <ka-link type="warning" underline="hover" disabled>1111</ka-link>
    <br />
    <p>TABS</p>
    <ka-tabs v-model:activeId="activeId">
      <template #default>
        <ka-tab-item id="test1" label="test1">
          大家好，我叫test1，<span style="color: red">hahahaha</span>
        </ka-tab-item>
        <ka-tab-item id="test2" label="test2"> test2 </ka-tab-item>
        <ka-tab-item id="disable1" label="test3" :disable="true">
          test3 disable
        </ka-tab-item>
        <ka-tab-item id="disable2" label="test3" disable>
          test3 disable
        </ka-tab-item>
      </template>
    </ka-tabs>
  </div>
</template>

<style scoped></style>
