<template>
  <div class="max-h-screen overflow-y-auto overflow-x-hidden">
    <div class="h-[65vh] bg-black"></div>
    <div v-for="item in 200" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>
