<template>
  <div class="max-h-screen overflow-y-auto overflow-x-hidden">
    <div class="h-[65vh] bg-black"></div>
    <div class="text-4xl font-bold m-2"> {{inform['name']}} </div>
    <div class="flex">
      <div v-for="item in items" :key="item.value" class="p-2 border-2 rounded-md drop-shadow-md select-none"
        :class="{ 'bg-gray-200': item.choose }" @click="information_click(item.index)">{{ item.text }}</div>
    </div>

    <div class="h-[65vh]">
      <Introduction v-show="down_block == 0" :data="inform"></Introduction>
      <Comment v-show="down_block == 1" class="box-border"></Comment>
      <Rate v-show="down_block == 2" ></Rate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import Comment from "@/components/course/comment.vue"
import Rate from "@/components/course/rate.vue"
import Introduction from "@/components/course/introduction.vue"
import axios from "axios"

const down_block = ref<Number>(0);
let inform = ref<any>([]);

async function searchCoursebyId(id: number) {
  try {
    const response = await axios.get('http://45.55.133.103:3000/course', {
      params: {
        id: id
      }
    });
    return response.data; // 直接返回数据
  } catch (error) {
    console.error('请求错误:', error);
  }
}


onMounted(async () => {
  const course_id: Number = Number(localStorage.getItem("course_id"));
  inform.value = await searchCoursebyId(course_id);
  inform.value = inform.value[0];
  console.log(inform.value);
})

interface information {
  text: string,
  choose: boolean,
  value: number,
  index: number
}

const items = ref<information[]>([
  { text: "Introduction", choose: true, value: 0, index: 0 },
  { text: "Comment", choose: false, value: 1, index: 1 },
  { text: "Rate", choose: false, value: 2, index: 2 }
])

function information_click(index: number) {
  items.value.forEach((item: information, idx: number) => {
    item.choose = idx === index;
  });
  down_block.value = index;
}
</script>
