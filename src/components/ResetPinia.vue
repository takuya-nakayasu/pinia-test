<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore2 } from '../stores/counter2';

const counter = useCounterStore2()
const { count2, doubleCount } = storeToRefs(counter)
const { increment } = counter

const patch = () => {
  counter.$patch({
    count2: 100,
  })
}

</script>
<template>
  <h2>Reset Pinia</h2>
  <div> {{ count2 }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="increment">UP</button>
  <button @click="counter.$reset">Reset</button>
  <button @click="patch">Patch</button>
</template>
