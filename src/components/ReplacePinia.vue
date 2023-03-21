<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()

const replace = () => {
    counter.$state = {
        count: 999,
        user: {
            name: 'ジョルノ'
        }
    }
}
</script>

<template>
    <h2>Replpace Pinia</h2>
    <p>カウント: {{ counter.count }}</p>
    <button @click="replace">Replace</button>
</template>