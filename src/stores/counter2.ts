import { defineStore } from 'pinia'

export const useCounterStore2 = defineStore('counter2', {
    state: () => ({ count2: 0, name2: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count2 * 2,
    },
    actions: {
        increment() {
            this.count2++
        }
    }
})
