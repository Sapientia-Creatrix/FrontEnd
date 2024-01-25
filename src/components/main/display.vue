<template>
  <div class="py-2 ml-[4rem]">
    <div class="grid gap-8 grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="" v-for="index in 40" :key="index">
        <Course_card :data="index"></Course_card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Course_card from "@/components/main/course_card.vue";
</script>
