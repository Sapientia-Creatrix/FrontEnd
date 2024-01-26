<template>
  <div class="p-8 max-h-[40vh] justify-between">
    <div v-for="item in comments" :key="item.id">
      <div class="m-4 font-bold">{{ item.user }}</div>
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface comment {
  id: number,
  user: string,
  content: string,
  time: string,
  like: number,
  dislike: number
}

const comments = ref<comment>([
  { id: 0, user: "01", content: "dwadwadwad", time: "", like: 0, dislike: 0 },
  { id: 0, user: "02", content: "dwadwad", time: "", like: 0, dislike: 0 },
  { id: 0, user: "02", content: "dwadwad", time: "", like: 0, dislike: 0 }
])

</script>
