import Vue from 'vue'
import Vuex from 'vuex'

import countries from './modules/countries'
import country from './modules/country'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countries,
        country
    }
})