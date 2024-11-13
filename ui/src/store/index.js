import { createStore } from 'vuex'

export default createStore({
  state: {
    currentStock: {
      code: '2330',
      name: '台積電',
      price: 338.5
    },
    tradeType: 'buy',
    orderType: 'ROD'
  },
  mutations: {
    setCurrentStock(state, stock) {
      state.currentStock = stock
    },
    setTradeType(state, type) {
      state.tradeType = type
    },
    setOrderType(state, type) {
      state.orderType = type
    }
  },
  actions: {
    async fetchStockData({ commit }, stockCode) {
      // Implement API call to fetch stock data
      // This is a placeholder
      const mockData = {
        code: stockCode,
        name: '台積電',
        price: 338.5
      }
      commit('setCurrentStock', mockData)
    }
  }
}) 