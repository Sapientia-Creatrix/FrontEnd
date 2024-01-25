<template>
  <div class="my-4 flex">
    <Filter class="w-1/5"></Filter>
    <div class="w-full">
      <div v-for="index in 40" :key="index">
        <Course_card_s :data="index"></Course_card_s>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Course_card_s from "@/components/search/course_card_s.vue";
import Filter from "@/components/search/filter.vue";
</script>
