<template>
    <div class="home">
      <StockHeader />
      <StockTabs />
      <StockTrading />
    </div>
  </template>
  
  <script>
  import StockHeader from '@/components/StockHeader.vue'
  import StockTabs from '@/components/StockTabs.vue'
  import StockTrading from '@/components/StockTrading.vue'
  
  export default {
    name: 'HomePage',
    components: {
      StockHeader,
      StockTabs,
      StockTrading
    }
  }
  </script>
  
  <style scoped>
  .home {
    max-width: 500px;
    margin: 0 auto;
  }
  </style>