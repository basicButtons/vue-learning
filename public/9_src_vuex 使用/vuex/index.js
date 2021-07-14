import Vuex from "vuex"
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    "JIA": function(context, value) {
        context.commit("increment", value)
    },
    "JIAN": function(context, value) {
        context.commit("decrement", value)
    }
}

const state = {
    sum: 0
}

const mutations = {
    increment(state, value) {
        state.sum += value
    },
    decrement(state, value) {
        state.sum -= value
    }
}

const getters = {
    demo() {
        return state.sum * 100
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store