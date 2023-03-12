<script setup lang="ts">
import { useCounterStore } from './stores/counter';
import HelloPinia from './components/HelloPinia.vue'

const counter = useCounterStore()
function appCount(): void {
  counter.increment()
}
</script>

<template>
  <div>Hello</div>
  <div>Count: {{ counter.count }}</div>
  <div>DoubleCount: {{ counter.doubleCount }}</div>
  <button @click="appCount()">Increment</button>
  <div>User: {{ counter.user.name }}</div>
  <HelloPinia />
</template>

<style scoped>
</style>
