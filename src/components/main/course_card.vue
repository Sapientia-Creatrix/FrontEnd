<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <!-- add header image here -->
    <div class="card-body">
      <h2 class="card-title">{{ props.data['name'] }}</h2>
      <p>{{props.data['difficulty']}}</p>
      <div class="card-actions justify-end">
        <!-- replace this with v-for for skills -->
        <div class="badge badge-outline" v-for="item in skill_list" :key="item">
          {{ item }}
        </div>
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
    type: null as unknown as PropType<any>,
    required: true,
  },
});

function splitString(str: string): string[] {
  if(str == null || str.includes('@') === false) {
    return [str];
  }
  return str.split('@');
}



const skill = props.data['skills'];
const skill_list = splitString(skill);


</script>
