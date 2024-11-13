<template>
  <div class="stock-tabs">
    <div class="tab-row">
      <button 
        v-for="tab in mainTabs" 
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-row">
      <button 
        v-for="tab in subTabs" 
        :key="tab"
        :class="['tab', { active: activeSubTab === tab }]"
        @click="activeSubTab = tab"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockTabs',
  data() {
    return {
      mainTabs: ['交易', '報價', '保存', '類別', '買賣'],
      subTabs: ['股票', '期貨', '權證', 'ROD', 'IOC', 'FOK'],
      activeTab: '交易',
      activeSubTab: '股票'
    }
  }
}
</script>

<style scoped>
.stock-tabs {
  background-color: #1a1a1a;
  padding: 5px;
}

.tab-row {
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}

.tab {
  flex: 1;
  padding: 8px;
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.tab.active {
  background-color: #ff4444;
}
</style>