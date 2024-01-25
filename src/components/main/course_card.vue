<template>
  <div>
    <div class="w-full min-h-[10rem] bg-red-200 p-4 rounded-lg"></div>
    <div>{{ props.data }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, defineProps } from "vue";

const props = defineProps({
  data: {
    type: Number as PropType<number>,
    required: true,
  },
});
</script>
