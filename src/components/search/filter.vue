<template>
  <div class="m-4">
    <div class="font-bold text-2xl">評價</div>
    <div v-for="item in items" :key="item.id" class="my-2">
      <input
        :id="'option-' + item.text"
        type="radio"
        class="mr-2"
        :value="item.value"
        v-model="checked"
      />
      <div class="rating">
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      <label :for="'option-' + item.text">{{ item.text }} 以上</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Score {
  text: string;
  value: number;
  id: number;
}

const items: Score[] = [
  { text: "4.5", value: 4.5, id: 0 },
  { text: "4.0", value: 4, id: 1 },
  { text: "3.5", value: 3.5, id: 2 },
  { text: "3.0", value: 3, id: 3 },
];

const checked = ref(items[0].value);
</script>
