<template>
  <!-- <div class="bg-green-400 h-[3rem] fixed left-0 right-0 top-0 flex"> -->
  <!--   <div class="w-min-[10rem] text-center mx-[3rem] leading-[3rem] text-xl"> -->
  <!--     Sapientia-Creatrix -->
  <!--   </div> -->
  <!--   <input class="border-2 border-solid my-2 w-1/3 ml-[8rem] rounded-l-lg" /> -->
  <!--   <div -->
  <!--     class="bg-green-300 border-2 border-l-0 border-solid rounded-r-lg my-2" -->
  <!--   > -->
  <!--     <SearchOutlined class="my-1 mx-3" /> -->
  <!--   </div> -->
  <!-- </div> -->
  <div class="">
    <div class="navbar-start text-2xl text-white font-semibold min-w-60">
      <span>Sapientia-Creatrix</span>
    </div>
    <div class="navbar-end inline-flex item-center">
      <ul class="flex">
        <input class="border-2 border-solid my-2 rounded-l-lg w-100" />
        <div class="text-white border-2 border-l-0 border-solid rounded-r-lg my-2">
          <router-link :to="'/search'">
            <SearchOutlined class="my-1 mx-3" />
          </router-link>
        </div>
      </ul>
      <ul class="flex text-white">
        <li class="ml-5 px-2 py-1 navbar_button"><a href="/">Home</a></li>
        <li class="ml-5 px-2 py-1 navbar_button">
          <router-link :to="'/course'">Courses</router-link>
        </li>
        <li class="ml-5 px-2 py-1 navbar_button"><router-link :to="'/user/path'
          ">Learning Path</router-link></li>
        <li class="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800 navbar_button">
          <router-link :to="'/user'">My Profile</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
</script>
