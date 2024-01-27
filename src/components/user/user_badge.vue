<template>
  <div class="flex flex-wrap items-center justify-center">
    <div class="grid grid-cols-2 grid-flow-row py-4 gap-y-10 gap-x-10">
      <div v-for="item in items">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title"> {{ item.title }} </h2>
            <p>{{ item.desc }}</p>
            <progress class="progress progress-accent w-56" :value="item.progress" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface badge {
  title: string, desc: string,
  name: string, progress: number
}

const items = ref<badge[]>([
  { title: "Start Learning", desc: "finish one course", name: "1", progress: 10 },
  { title: "Starter", desc: "finish ten courses", name: "2", progress: 20 },
  { title: "Junior", desc: "finish hundred courses", name: "3", progress: 30 },
  { title: "Senior", desc: "finish thousand courses", name: "4", progress: 40 },
  { title: "Loyalty I", desc: "login 100 days", name: "5", progress: 50 },
  { title: "Happy birthday", desc: "login in the account create day", name: "5", progress: 50 },
])

</script>
