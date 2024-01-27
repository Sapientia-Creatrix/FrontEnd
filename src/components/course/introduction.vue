<template>
<div>
  <div class="border-y border-slate-400 m-2">
    <div class="m-4 text-2xl">Description</div>
    <div class="m-8 text-xl">{{props.data.description}}</div>
  </div>
  <div class="border-b-[1px] border-slate-400 m-2">
    <div class="m-4 text-2xl">Skills</div>
    <div class="flex">
      <div class="m-2 font-bold" v-for="item in skill_list" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
  <div class="border-b-[1px] border-slate-400 m-2">
    <div class="m-4 text-2xl">University</div>
    <div class="m-8 text-xl">{{props.data.university}}</div>
  </div>
  <div class="border-b-[1px] border-slate-400 m-2">
    <div class="m-4 text-2xl">Level</div>
    <div class="m-8 text-xl">{{props.data.difficulty}}</div>
  </div>
  <div class="border-b-[1px] border-slate-400 m-2">
    <div class="m-4 text-2xl">Popularity</div>
    <div class="m-8 text-xl">{{props.data.deleted}}</div>
  </div>
</div>
</template>

<script setup lang="ts">
import { PropType, defineProps, onMounted, ref } from "vue";

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

let skill_list = ref<Array<string>>([]);
onMounted(() => {
  console.log(props.data)
  const skill = props.data.popularity;
  skill_list.value = splitString(skill);

})


</script>