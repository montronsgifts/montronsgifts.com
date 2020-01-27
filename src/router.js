import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Books from './components/Books'
import Scarves from './components/Scarves'
import Blankets from './components/Blankets'
import ContactMe from './components/ContactMe'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/books',
            name: 'books',
            component: Books
        },
        {
            path: '/scarves',
            name: 'scarves',
            component: Scarves 
        },
        {
            path: '/blankets',
            name: 'blankets',
            component: Blankets 
        },
        {
            path: '/contactme',
            name: 'contactme',
            component: ContactMe 
        }
       
    ]
})

export default router