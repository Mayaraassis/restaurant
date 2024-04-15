import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedCategory: ''
  },
  mutations: {
    ChangeCategory (state, id) {
        state.selectedCategory = id
    }
  },
  actions: {
    ChangeCategory (context, id) {
      context.commit('ChangeCategory', id)
    }
  }
})