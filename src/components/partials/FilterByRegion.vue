<template>
  <div>
      <label><strong>Continent:</strong></label>
      <select @change="filterCountriesByRegion($event)">
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'FilterByRegion',
    methods: {
        ...mapActions([
            'filterCountriesByRegion'
        ])
    }
}
</script>

<style scoped>
    label{
        font-family: 'Dosis', sans-serif;
    }
    select{
        display: inline-block;
        margin-left: 10px;
        margin-top: 10px;
        font-family: 'Dosis', sans-serif;
        width: 250px;
        height: 30px;
    }
</style>