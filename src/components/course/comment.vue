<template>
  <div class="p-8 max-h-[40vh] justify-between">
    <div class="m-4 font-bold">me</div>
    <div class="flex">
      <input class="bg-transparent m-8 text-2xl mb-2 w-5/6" type="text" v-model="inputValue" placeholder="Your comment">
      <div class="pt-2">
        <SendOutlined class="text-2xl"/>
      </div>
    </div>
    <div v-for="(item, index) in comments" :key="index" class="border-b-[1px] border-slate-400" :class="{'border-y-[1px]':index == 0}">
      <div class="m-4 font-bold">{{ item.user }}</div>
      <div class="m-8">{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  SendOutlined
} from '@ant-design/icons-vue';

const inputValue = ref<string>("");

interface comment {
  id: number,
  user: string,
  content: string,
  time: string,
  like: number,
}

const comments = ref<Array<comment>>([
  { id: 0, user: "01", content: "dwadwadwad", time: "", like: 0 },
  { id: 0, user: "02", content: "dwadwad", time: "", like: 0 },
  { id: 0, user: "02", content: "dwadwad", time: "", like: 0 }
])

</script>
