import axios from "axios"

const state = {
    country: []
}

const getters = {
    theCountry: (state) => state.country
}

const actions = {
    async fetchCountry({ commit }, slug) {
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${slug}`)

        commit('setCountry', response.data)
    }
}

const mutations = {
    setCountry: (state, country) => (state.country = country)
}

export default {
    state,
    getters,
    actions,
    mutations
}