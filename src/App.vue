<script setup lang="ts">
import { useCounterStore } from './stores/counter';

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
</template>

<style scoped>
</style>
