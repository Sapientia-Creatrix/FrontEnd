<template>
  <div>
    <div
      class="sticky font-bold text-2xl border-1 border-solid py-2 md-2 top-0 bg-gray-200"
    >
      課程內容
    </div>
    <div v-for="item in 100" :key="item" class="border-b-2 font-bold h-[4rem]">
      Chapter {{ item }}
    </div>
  </div>
</template>
>

<script setup lang="ts"></script>
