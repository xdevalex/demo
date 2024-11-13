<template>
  <div class="number-pad">
    <div class="number-grid">
      <button v-for="n in 9" :key="n" @click="inputNumber(n)">{{ n }}</button>
      <button class="zero" @click="inputNumber(0)">0</button>
      <button class="decimal" @click="inputDecimal">.</button>
      <button class="clear" @click="clear">C</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberPad',
  data() {
    return {
      currentInput: ''
    }
  },
  methods: {
    inputNumber(num) {
      this.currentInput += num.toString()
      this.$emit('number-input', this.currentInput)
    },
    inputDecimal() {
      if (!this.currentInput.includes('.')) {
        this.currentInput += '.'
        this.$emit('number-input', this.currentInput)
      }
    },
    clear() {
      this.currentInput = ''
      this.$emit('number-input', this.currentInput)
    }
  }
}
</script>

<style scoped>
.number-pad {
  margin-top: 10px;
}

.number-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

button {
  padding: 15px;
  font-size: 18px;
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:active {
  background-color: #444;
}

.zero {
  grid-column: 1 / 3;
}
</style> 