<template>
  <div class="py-2 ml-[4rem]">
    <div class="m-[2rem] grid grid-cols-4 gap-8">
      <div class="" v-for="index in 40" :key="index">
        <Course_card :data="index"></Course_card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Course_card from "@/components/main/course_card.vue";
</script>
