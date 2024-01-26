<template>
  <div class="overflow-auto">
    <splitpanes class="default-theme">
      <pane min-size="50" size="80">
        <Main></Main>
      </pane>
      <pane min-size="10" max-size="30" size="20">
        <Content></Content>
      </pane>
    </splitpanes>
  </div>
</template>

<script setup lang="ts">
import Content from "@/components/course/content.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import { onMounted, onUnmounted } from "vue";
import Main from "@/components/course/main.vue";

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "auto";
})
</script>

<style></style>
