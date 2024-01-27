<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <!-- add header image here -->
    <div class="card-body">
      <h2 class="card-title">{{ props.data }}</h2>
      <p>DESCRIPTION</p>
      <div class="card-actions justify-end">
        <!-- replace this with v-for for skills -->
        <div class="badge badge-outline">SKILL</div>
        <div class="badge badge-outline">SKILL</div>
      </div>
    </div>
  </div>
  <!-- <div class="w-full min-h-[10rem] bg-red-200 p-4 rounded-lg"></div> -->
  <!-- <div>{{ props.data }}</div> -->
</template>

<script setup lang="ts">
import { PropType, defineProps } from "vue";

const props = defineProps({
  data: {
    type: Number as PropType<number>,
    required: true,
  },
});
</script>
