<template>
  <div class="m-4">
    <div class="font-bold text-2xl">評價</div>
    <div v-for="item in items" :key="item.id" class="flex space-x-2 item-center my-2 rating-hidden">
      <input :id="'option-' + item.text" type="radio" class="mr-2" :value="item.value" v-model="checked" />
      <div v-for="star in Math.floor(item.value)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path fill="#ffa033" fill-rule="evenodd"
            d="M9.595 6.252L8 1L6.405 6.252H1l4.373 3.4L3.75 15L8 11.695L12.25 15l-1.623-5.348L15 6.252z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div v-if="item.value % 1 != 0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path fill="#ffa033" fill-rule="evenodd"
            d="M6.405 6.252L8 1l1.595 5.252H15l-4.373 3.4L12.25 15L8 11.695L3.75 15l1.623-5.348L1 6.252zM8 10.032l1.915 1.49l-.731-2.41l1.915-1.49H8.732L8 5.214v4.82zm5.652-3.31H9.28z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div v-for="star in Math.floor(5 - item.value)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
          <path fill="currentColor"
            d="m7.5 2.69l1.07 2.68l.25.63h3l-2 1.75l-.5.44l.23.63l1 3.13l-2.48-1.77l-.57-.4l-.57.4l-2.52 1.77l1-3.13l.21-.63l-.5-.44l-2-1.75h3l.25-.63zM7.5 0l-2 5h-5l4 3.5l-2 6l5-3.5l5 3.5l-2-6l4-3.5h-5z" />
        </svg>
      </div>
      <label :for="'option-' + item.text">{{ item.text }} 以上</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineComponent } from 'vue';

defineComponent({
  name: 'MakiStarStroked',
});
defineComponent({
  name: 'CodiconStarHalf',
});
defineComponent({
  name: 'CodiconStarFull',
});

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
