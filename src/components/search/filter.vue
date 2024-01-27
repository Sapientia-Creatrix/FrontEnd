<template>
  <div class="m-4">
    <div class="font-bold text-2xl">評價</div>
    <div v-for="item in items" :key="item.id" class="flex space-x-2 item-center">
      <input :id="'option-' + item.text" type="radio" class="mr-2" :value="item.value" v-model="checked" />
      <div v-for="star in Math.floor(item.value)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="#ffa033" d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3z" />
        </svg>
      </div>
      <div v-if="item.value % 1 != 0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="#ffa033"
            d="m12 15.925l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4zM5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z" />
        </svg>
      </div>
      <div v-for="star in Math.floor(5 - item.value)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M9.6 16.65L12 14.8l2.4 1.85l-.9-3.05l2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6zM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3zM12 12.775" />
        </svg>
      </div>
      <label :for="'option-' + item.text">{{ item.text }} 以上</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineComponent } from 'vue';

defineComponent({
  name: 'MaterialSymbolsStarRateOutline',
});
defineComponent({
  name: 'MaterialSymbolsStarHalfOutlin',
});
defineComponent({
  name: 'MaterialSymbolsStarRate',
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
