<template>
  <div class="m-4 flex">
    <!-- 課程縮圖 -->
    <div class="bg-red-200 w-1/3 min-w-40 max-w-[20rem] h-[10rem]">
      
    </div>
    <!-- 課程資訊 -->
    <div class="mx-2 border-2 w-full">
      <!-- 課程名稱 -->
      <div class="font-bold">
        {{ props.data }}
      </div>
    </div>
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
