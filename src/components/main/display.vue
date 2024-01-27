<template>
  <div class="py-2 ml-[4rem]">
    <div class="grid gap-8 grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="" v-for="(data, index) in datas" :key="index">
        <a href=/#/course>
          <Course_card :data="data" @click="click_course(data.id)"></Course_card>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Course_card from "@/components/main/course_card.vue";
import { ref, onMounted } from "vue";
import axios from 'axios';

let datas = ref<Array<any>>([{}]);

async function suggest_basic() {
  try {
    const response = await axios.get('http://45.55.133.103:3000/suggest/basic', {
      params: {
        id: 1
      }
    });
    return response.data; // 直接返回数据
  } catch (error) {
    console.error('请求错误:', error);
  }
}

function click_course(value: Number): void {
  console.log(value);
  localStorage.setItem("course_id", value.toString());
}

onMounted(async () => {
  datas.value = await suggest_basic();
})
</script>
