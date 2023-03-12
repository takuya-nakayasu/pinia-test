<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()
</script>
<template>
  <div>Start Hello Pinia</div>
  <div> {{ counter.count }}</div>
  <div>{{ counter.doubleCount }}</div>
</template>
