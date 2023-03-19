<script setup lang="ts">
import { useCounterStore } from './stores/counter';
import HelloPinia from './components/HelloPinia.vue'
import ResetPinia from './components/ResetPinia.vue'

const counter = useCounterStore()
function appCount(): void {
  counter.increment()
}
</script>

<template>
  <h2>Hello</h2>
  <div>Count: {{ counter.count }}</div>
  <div>DoubleCount: {{ counter.doubleCount }}</div>
  <button @click="appCount()">Increment</button>
  <div>User: {{ counter.user.name }}</div>
  <button @click="counter.$reset()">Reset</button>
  <h2>Hello Pinia Component</h2>
  <HelloPinia />
  <ResetPinia />
</template>

<style scoped>
</style>
