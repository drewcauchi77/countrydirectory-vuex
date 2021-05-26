<template>
    <div>
        <Search />
        <Countries />
    </div>
</template>

<script>
import Search from '../partials/Search'
import Countries from '../partials/Countries'

export default {
    name: 'Home',
    components: {
        Search,
        Countries
    }
}
</script>

<style>

</style>