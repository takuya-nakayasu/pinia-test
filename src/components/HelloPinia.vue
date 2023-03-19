<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
const { increment } = counter

</script>
<template>
  <div>Start Hello Pinia</div>
  <div> {{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="increment">UP</button>
</template>
