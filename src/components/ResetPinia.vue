<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore2 } from '../stores/counter2';

const counter = useCounterStore2()
const { count, doubleCount } = storeToRefs(counter)
const { increment } = counter

</script>
<template>
  <h2>Reset Pinia</h2>
  <div> {{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="increment">UP</button>
  <button @click="counter.$reset">Reset</button>
</template>
