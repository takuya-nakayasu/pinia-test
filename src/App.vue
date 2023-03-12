<script setup lang="ts">
import { useCounterStore } from './stores/counter';

const counter = useCounterStore()
</script>

<template>
  <div>Hello</div>
  <div>Count: {{ counter.count }}</div>
  <div>DoubleCount: {{ counter.doubleCount }}</div>
  <button>Increment</button>
</template>

<style scoped>
</style>
