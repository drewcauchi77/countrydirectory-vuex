<template>
    <div>
        <Search />
        <FilterByRegion />
        <Countries />
    </div>
</template>

<script>
import Search from '../partials/Search'
import FilterByRegion from '../partials/FilterByRegion'
import Countries from '../partials/Countries'

export default {
    name: 'Home',
    components: {
        Search,
        FilterByRegion,
        Countries
    }
}
</script>