<template>
    <div id="app">
        <main>
            <Header />
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Header from './components/partials/Header'

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>