<template>
    <div>
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