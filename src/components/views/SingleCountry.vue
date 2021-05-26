<template>
  <div>
      <img :src="theCountry.flag" :alt="theCountry.name">
      <h1>{{ theCountry.name }} ({{ theCountry.alpha2Code }}/{{ theCountry.alpha3Code }})</h1>
      
      <table>
          <tr>
            <td>
                <div><span><strong>Capital City</strong></span></div>
            </td>
            <td>
                <div>
                    <span v-if="theCountry.capital">{{ theCountry.capital }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
              <td>
                  <div><span><strong>Alternate Country Names</strong></span></div>
              </td>
              <td>
                  <div v-for="(name, index) in theCountry.altSpellings" :key="index">
                      <span v-if="name">{{ name }}</span>
                      <span v-else>N/A</span>
                  </div>
              </td>
          </tr>
          <tr>
            <td>
                <div><span><strong>Region</strong></span></div>
            </td>
            <td>
                <div>
                    <span v-if="theCountry.region">{{ theCountry.region }} ({{ theCountry.subregion }})</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <div><span><strong>Calling Codes</strong></span></div>
            </td>
            <td>
                <div v-for="(code, index) in theCountry.callingCodes" :key="index">
                    <span v-if="code">+{{ code }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <div><span><strong>Domain</strong></span></div>
            </td>
            <td>
                <div v-for="(domain, index) in theCountry.topLevelDomain" :key="index">
                    <span v-if="domain">{{ domain }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <div><span><strong>Timezone</strong></span></div>
            </td>
            <td>
                <div v-for="(timezone, index) in theCountry.timezones" :key="index">
                    <span v-if="timezone">{{ timezone }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <div><span><strong>Currency</strong></span></div>
            </td>
            <td>
                <div v-for="(currency, index) in theCountry.currencies" :key="index">
                    <span v-if="currency">{{ currency.name }} ({{ currency.symbol }})</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <div><span><strong>Languages</strong></span></div>
            </td>
            <td>
                <div v-for="(language, index) in theCountry.languages" :key="index">
                    <span v-if="language">{{ language.name }}</span>
                    <span v-else>N/A</span>
                </div>
            </td>
          </tr>
          <tr>
              <td>
                <div><span><strong>Population</strong></span></div>
              </td>
              <td>
                  <div>
                      <span v-if="theCountry.population"><em>approx.</em> {{ theCountry.population }}</span>
                      <span v-else>N/A</span>
                  </div>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SingleCountry',
    created() {
        this.fetchCountry(this.$route.params.slug)
    },
    methods: {
        ...mapActions([
            'fetchCountry'
        ]),
    },
    computed: mapGetters([
        'theCountry'
    ])
}
</script>

<style scoped>
    h1{
        text-align: left;
    }
    img{
        padding-top: 30px;
        max-width: 500px;
    }
    td{
        padding: 5px 10px;
        width: 250px;
        text-align: left;
    }
    span{
        display: block;
        margin-bottom: 5px;
        font-family: 'Dosis', sans-serif;
    }
</style>