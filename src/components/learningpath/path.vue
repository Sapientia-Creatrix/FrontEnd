<template>
  <div class="join w-full justify-between">
    <div class="px-10 py-4">
      <div class="steps steps-vertical">
        <!-- display icon instead of num in the circle -->
        <li v-for="p in list" v-on:click="courses = list[p - 1]" class="step step-primary hover:step-accent">
          <!-- {{ p }} -->
        </li>
        <li v-for="f in lock" v-on:click="courses = lock[f - 6]" class="step">
        </li>
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200 px-40">
      <div class="hero-content flex-col lg:flex-col-reverse">
        <h1 class="text-5xl font-bold"> Title </h1>
        <p class="py-6" v-if="courses == 0"> Select a course besides to continue your learning path</p>
        <p class="py-6" v-else-if="courses - 1 in list">{{ courses }}</p>
        <p class="py-6" v-else>You cannot access {{ courses }} yet! Please complete the previous task</p>
        <button class="btn btn-primary">Button</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const courses = ref(0)
const list = ref([1, 2, 3, 4, 5])
const lock = ref([6, 7])

onMounted(() => { list.value })

</script>
