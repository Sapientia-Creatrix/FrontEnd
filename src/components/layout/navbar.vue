<template>
  <div class="bg-green-400 h-[3rem] fixed left-0 right-0 top-0 flex">
    <div class="w-min-[10rem] text-center mx-[3rem] leading-[3rem] text-xl">
      Sapientia-Creatrix
    </div>
    <input class="border-2 border-solid my-2 w-1/3 ml-[8rem] rounded-l-lg" />
    <div
      class="bg-green-300 border-2 border-l-0 border-solid rounded-r-lg my-2"
    >
      <SearchOutlined class="my-1 mx-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
</script>
