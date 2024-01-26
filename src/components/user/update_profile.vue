<template>
  <div class="grid grid-col-4 gap-4 grid-flow-row justify-center">
    <div class="join">
      <div class="w-60 pt-5 text-center shadow">NAME</div>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Change Your Name here"
      />
    </div>
    <div class="join">
      <div class="w-60 pt-5 text-center shadow">AGE</div>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Change Your AGE here"
      />
    </div>
    <div class="join">
      <div class="w-60 pt-5 text-center shadow">SCHOOL</div>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Change Your SCHOOL here"
      />
    </div>
    <div class="join">
      <div class="w-60 pt-5 text-center shadow">OCCUPATION</div>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Change Your OCCUPATION here"
      />
    </div>
    <div class="join">
      <div class="w-60 pt-5 text-center shadow">MAIL</div>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Change Your MAIL here"
      />
    </div>
    <div class="join">
      <div class="w-60 pt-5 text-center shadow">DESCRIPTION</div>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Change Your DESCRIPTION here"
      />
    </div>
    <div class="grid gap-4 grid-cols-2">
      <label v-for="(item, index) in data" :key="item" class="flex items-center">
        <input type="checkbox" v-model="selectedItems[index]" :value="item">
        <span class="ml-2">{{ item }}</span>
      </label>
    </div>
    <button class="btn bg-sky-400">SAVE</button>
    <button class="btn bg-rose-400">CANCEL</button>
  </div>
</template>

<script setup lang="ts">
import data from "@/components/user/data.json";
import { ref } from "vue";

const selectedItems = ref<Array<boolean>>(Array(data.length).fill(false));

</script>
