<template>
  <div class="max-h-screen overflow-y-auto overflow-x-hidden">
    <div class="h-[65vh] bg-black"></div>
    <div class="flex">
      <div v-for="item in items" :key="item.value" class="p-2 border-2 rounded-md drop-shadow-md select-none"
      :class="{'bg-gray-200': item.choose}" @click="information_click(item.index)">{{item.text}}</div>
    </div>
    <div v-for="item in 200" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

interface information{
  text: string,
  choose: boolean,
  value: number,
  index: number
}

const items = ref<information[]>([
  {text:"Introduction", choose: true, value:0, index: 0},
  {text:"Comment", choose: false, value:1, index: 1}
])

function information_click(index: number) {
  items.value.forEach((item, idx) => {
    item.choose = idx === index;
  });
}
</script>
