<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()
const { count, doubleCount, user } = storeToRefs(counter)
const { increment } = counter

const patch = () => {
  counter.$patch({
    count: 100,
    user: {
      name: '蝮'
    }
  })
}
</script>
<template>
  <div> {{ count }}</div>
  <div>{{ doubleCount }}</div>
  <div>User: {{ user.name }}</div>
  <button @click="increment">UP</button>
  <button @click="patch">Patch</button>
</template>
