import axios from 'axios'

const state = {
    countries: []
}

const getters = {
    allCountries: (state) => state.countries
}

const actions = {
    async fetchCountries({ commit }) {
        const response = await axios.get('https://restcountries.eu/rest/v2/all')

        commit('setCountries', response.data)
    },
    async fetchSearchCountries({ commit, dispatch }, searchWord) {
        try{
            if(searchWord !== ''){
                const response = await axios.get(`https://restcountries.eu/rest/v2/name/${searchWord}`)
                
                commit('setCountries', response.data)
            }else{
                dispatch('fetchCountries')
            }
        }catch(error){
            console.log(error)
        }
    },
    async filterCountriesByRegion({ commit, dispatch }, e) {
        const region = e.target.options[e.target.options.selectedIndex].innerText

        if(region !== 'All'){
            const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            
            commit('setCountries', response.data)
        }else{
            dispatch('fetchCountries')
        }
    }
}

const mutations = {
    setCountries: (state, countries) => (state.countries = countries),
}

export default {
    state,
    getters,
    actions,
    mutations
}