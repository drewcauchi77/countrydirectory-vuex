import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/views/Home'
import About from '../components/views/About'
import SingleCountry from '../components/views/SingleCountry'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/countries',
        name: 'Countries',
        component: Home
    },
    {
        path: '/countries/:slug',
        name: 'SingleCountry',
        component: SingleCountry
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router