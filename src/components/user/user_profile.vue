<template>
  <div class="p-16">
    <div class="p-8 bg-white shadow mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          <div>
            <p class="font-bold text-gray-700 text-xl">NUM</p>
            <p class="text-gray-400">SKILLS</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">NUM</p>
            <p class="text-gray-400">COMPLETE</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">NUM</p>
            <p class="text-gray-400">BADGE</p>
          </div>
        </div>
        <div class="relative text-black border-solid">
          <div
            class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
            <UserOutlined class="h-24 w-24" style="font-size: 80px" />
          </div>
        </div>

        <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          <button
            class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            <router-link :to="'/user/badge'">See all Badges</router-link>
          </button>
          <button
            class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            <router-link :to="'/user/update'"> UPDATE </router-link>
          </button>
        </div>
      </div>

      <div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          NAME <span class="font-light text-gray-500">AGE</span>
        </h1>

        <p class="mt-8 text-gray-500">OCCUPATION</p>
        <p class="mt-2 text-gray-500">SCHOOL</p>
      </div>

      <div class="mt-12 flex flex-col justify-center">
        <p class="text-gray-600 text-center font-light lg:px-16">INTRO</p>
        <button v-if="showMore === false" class="text-indigo-500 py-2 px-4 font-medium mt-4"
          v-on:click="changeShowMore()">
          Show more
        </button>
      </div>

      <div v-if="showMore === true" class="justify-center mt-12 text-sm">
        <calendar-heatmap :max="100" :values="[{ date: '2023-9-22', count: 6 },
        { date: '2023-9-01', count: 12 },
        { date: '2023-11-22', count: 17 },
        { date: '2023-10-30', count: 38 },
        ]" :end-date="endDate" :range-color="['#c0ddf9', '#73b3f3', '#3886e1', '#17459e']" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const showMore = ref(false);

const currentDate = new Date()
const endDate = currentDate.toISOString().split('T')[0]

function changeShowMore() {
  showMore.value = true;
  console.log(showMore);
}

</script>
