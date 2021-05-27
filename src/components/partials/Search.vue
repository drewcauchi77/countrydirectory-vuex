<template>
    <div>
        <label for="search"><strong>Search:</strong></label>
        <input v-model="search" 
            name="search" 
            type="text" 
            placeholder="Search country..." 
            @input="onInput"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Search',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapActions([
            'fetchSearchCountries'
        ]),
        onInput() {
            this.fetchSearchCountries(this.search)
        }
    }
}
</script>

<style scoped>
    label{
        font-family: 'Dosis', sans-serif;
    }
    input{
        display: inline-block;
        margin-left: 10px;
        font-family: 'Dosis', sans-serif;
        width: 250px;
        height: 30px;
    }
</style>