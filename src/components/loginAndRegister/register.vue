<template>
  <div class="bg-white">
    <div class="h-1/4 flex items-end justify-center">
      <div class="leading-10 text-2xl font-bold">Sapientia-Creatrix</div>
    </div>
    <div class="w-full h-auto p-8">
      <input class="border select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg" type="text" v-model="username" placeholder="Username">
      <input class="border select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg" type="password" v-model="password" placeholder="Password">
      <input class="border select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg" type="password" v-model="confirm_password" placeholder="Confirm Password">
      <input class="border select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg" type="text" v-model="email" placeholder="E-mail address">
      <div class="border items-center select-none pl-4 min-h-[3.5rem] w-full my-2 rounded-lg text-center text-xl text-white bg-gray-500 flex hover:bg-gray-400" @click="SignIn()">
        <div class="w-full">Sign Up</div>
      </div>
    </div>
    <div class="text-slate-400"> Have an account? <router-link :to="'/login'" class="text-cyan-700">Sign In</router-link></div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const username = ref<string>('');
const password = ref<string>('');
const confirm_password = ref<string>('');
const email = ref<string>('');

function SignIn() {
  if(username.value === '') {
    alert('Please enter your username');
    return;
  }
  if(password.value === '') {
    alert('Please enter your password');
    return;
  }
  if(confirm_password.value !== password.value) {
    alert('The passwords you entered do not match.');
    return;
  }
  if(email.value === '') {
    alert('Please enter your email');
    return;
  }
}

</script>
