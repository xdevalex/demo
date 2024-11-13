<template>
    <div class="stock-header">
        <div class="search-bar">
        <input type="text" v-model="stockCode" placeholder="2330" class="stock-input">
        <div class="market">台積電</div>
        <button class="search-btn">
            <i class="fas fa-search"></i>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StockHeader',
    data() {
        return {
        stockCode: '2330'
        }
    }
}
</script>

<style scoped>
.stock-header {
    background-color: #1a1a1a;
    padding: 10px;
}

.search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
}

.stock-input {
    background-color: #333;
    color: white;
    border: none;
    padding: 8px;
    width: 80px;
    border-radius: 4px;
}

.market {
    color: #fff;
    flex-grow: 1;
}

.search-btn {
    background-color: #333;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
}
</style>