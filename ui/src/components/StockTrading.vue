<template>
  <div class="stock-trading">
    <div class="price-display">
      <span class="price">338.5</span>
      <div class="price-controls">
        <button @click="adjustPrice('minus')">-</button>
        <button @click="adjustPrice('plus')">+</button>
      </div>
    </div>
    <NumberPad @number-input="handleNumberInput" />
  </div>
</template>

<script>
import NumberPad from './NumberPad.vue'

export default {
  name: 'StockTrading',
  components: {
    NumberPad
  },
  data() {
    return {
      currentPrice: 338.5
    }
  },
  methods: {
    adjustPrice(action) {
      if (action === 'plus') {
        this.currentPrice += 0.5
      } else {
        this.currentPrice -= 0.5
      }
    },
    handleNumberInput(number) {
      console.log('Number input:', number)
    }
  }
}
</script>

<style scoped>
.stock-trading {
  background-color: #1a1a1a;
  padding: 10px;
}

.price-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.price {
  font-size: 24px;
  color: #ff4444;
}

.price-controls {
  display: flex;
  gap: 5px;
}

.price-controls button {
  width: 40px;
  height: 40px;
  background-color: #333;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
}
</style> 