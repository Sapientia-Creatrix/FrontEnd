<template>
  <Nav class="navbar_normal"></Nav>
  <div class="grid grid-cols-3 justify-items-center h-screen bg-gray-200">
    <div class="w-1/4 text-center"></div>
    <LoginBlock class="w-auto text-center border-2 min-w-[35rem] my-[10rem]"></LoginBlock>
    <div class="w-1/4 text-center"></div>
  </div>
</template>

<script setup lang='ts'>
import Nav from '@/components/layout/navbar.vue'
import LoginBlock from '@/components/loginAndRegister/loginBlock.vue'
</script>