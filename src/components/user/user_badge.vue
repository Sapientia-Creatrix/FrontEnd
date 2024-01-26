<template>
  <div class="flex item-center justify-center">
    <div class="grid grid-col-1 py-4 gap-y-10 flex item-center">
      <div v-for="item in items">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Title</h2>
            <p>DESCRIPTION {{ item.progress }}</p>
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
  name: string, progress: number
}

const items = ref<badge[]>([
  { name: "1", progress: 10 },
  { name: "2", progress: 20 },
  { name: "3", progress: 30 },
  { name: "4", progress: 40 },
  { name: "5", progress: 50 },
])

</script>
