import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '沈阳'
    },
    actions: {
        changeCity (ctx, city) {
            ctx.commit('changeCity', city)
        }
    },
    mutations: {
        changeCity (state, city) {
            state.city = city
        }
    }
})
