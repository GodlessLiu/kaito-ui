<script setup lang="ts">
import { ref } from "vue";
const finished = ref<boolean>(false);
const loading = ref<boolean>(false);
const c = () => {
  alert("clicked");
};
const activeId = ref<string>("test1");
const count = ref<number>(50);
const loadMore = () => {
  if (count.value <= 200) {
    loading.value = true;
    setTimeout(() => {
      count.value += 50;
      loading.value = false;
    }, 1000);
  } else {
    finished.value = true;
  }
};
const switchValue = ref(true);

const v = ref(1);
const next = () => {
  v.value = (v.value + 1) % 4;
};
const finish = () => {
  alert("finish");
};
</script>

<template>
  <div class="showcase">
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
    <p>List 无限滚动</p>
    <ka-list
      @load="loadMore"
      :finished="finished"
      :loading="loading"
      finishText="没有咯"
      loadingText="加载ing"
    >
      <ka-list-cell>
        <p
          v-for="i in count"
          :key="i"
          style="height: 39.4px; line-height: 40px"
        >
          {{ i }}
        </p>
      </ka-list-cell>
    </ka-list>
    <p>switch</p>
    <ka-switch v-model="switchValue" :disable="false">svg</ka-switch>
    <p>steps</p>
    <ka-button type="info" @click="next">下一步</ka-button>
    <ka-steps :value="v" @finish="finish">
      <ka-step>步骤一</ka-step>
      <ka-step>步骤二</ka-step>
      <ka-step>步骤三</ka-step>
      <ka-step>步骤四</ka-step>
    </ka-steps>
  </div>
</template>

<style scoped>
.showcase > p {
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  &::before {
    content: "#";
    margin-right: 4px;
  }
}
</style>
