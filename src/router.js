import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Books from '@/views/Books'
import Scarves from '@/views/Scarves'
import Blankets from '@/views/Blankets'
import Contact from '@/views/Contact'

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
            path: '/contact',
            name: 'contact',
            component: Contact
        }
       
    ]
})

export default router