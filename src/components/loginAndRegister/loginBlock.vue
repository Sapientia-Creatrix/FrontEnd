<template>
<div class="bg-white">
  <div class="h-1/4 flex items-end justify-center">
    <div class="leading-10 text-2xl font-bold">Sapientia-Creatrix</div>
  </div>
  <div class="w-full h-auto p-8">
    <input class="border select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg" type="text" v-model="username" placeholder="Username">
    <input class="border select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg" type="password" v-model="password" placeholder="Password">
    <div class="border items-center select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg text-center text-xl text-white bg-gray-500 flex hover:bg-gray-400">
      <div class="w-full">Sign In</div>
    </div>
  </div>
</div>
</template>

<script setup lang='ts'>

import { ref } from 'vue'

const username = ref<string>('');
const password = ref<string>('');

</script>