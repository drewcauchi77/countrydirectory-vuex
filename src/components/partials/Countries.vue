<template>
    <table>
        <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Domain</th>
            <th>Calling Code</th>
        </tr>
        <tr v-for="country in allCountries" :key="country.alpha2Code">
            <td class="country-flag">
                <img :src="country.flag" :alt="country.name">
            </td>
            <td class="country-name">
                <a href="#">{{ country.name }} ({{ country.alpha2Code }}/{{ country.alpha3Code }})</a>
            </td>
            <td class="country-domain">
                <div v-for="domain in country.topLevelDomain" :key="domain">
                    <span v-if="domain">{{ domain }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
            <td class="country-code">
                <div v-for="code in country.callingCodes" :key="code">
                    <span v-if="code">+{{ code }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Countries',
    created() {
        this.fetchCountries()
    },
    methods: {
        ...mapActions([
            'fetchCountries'
        ]),
    },
    computed: mapGetters([
        'allCountries'
    ])
}
</script>

<style>
    tr{
        height: 40px;
        padding: 5px;
    }
    table{
        margin-top: 30px;
    }
    table, th, td{
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td{
        width: 150px;
        text-align: center;
        font-family: 'Dosis', sans-serif;
    }
    th{
        background-color: rgba(128, 128, 128, 0.4);
    }
    img{
        width: 100%;
        height: auto;
    }
    .country-domain span{
        display: block;
    }
</style>