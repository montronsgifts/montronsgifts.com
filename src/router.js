import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Bags from '@/views/Bags'
import Baskets from '@/views/Baskets'
import Blankets from '@/views/Blankets'
import Books from '@/views/Books'
import Hats from '@/views/Hats'
import Letters from '@/views/Letters'
import Lovies from '@/views/Lovies'
import Pumpkins from '@/views/Pumpkins'
import Scarves from '@/views/Scarves'
import Scrubbies from '@/views/Scrubbies'
import Stuffies from '@/views/Stuffies'
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
            path: '/bags',
            name: 'bags',
            component: Bags
        },
        {
            path: '/baskets',
            name: 'baskets',
            component: Baskets
        },
        {
            path: '/blankets',
            name: 'blankets',
            component: Blankets 
        },
        {
            path: '/books',
            name: 'books',
            component: Books
        },
        {
            path: '/hats',
            name: 'hats',
            component: Hats
        },
        {
            path: '/letters',
            name: 'letters',
            component: Letters
        },
        {
            path: '/lovies',
            name: 'lovies',
            component: Lovies 
        },
        {
            path: '/pumpkins',
            name: 'pumpkins',
            component: Pumpkins
        },
        {
            path: '/scarves',
            name: 'scarves',
            component: Scarves 
        },
        {
            path: '/scrubbies',
            name: 'scrubbies',
            component: Scrubbies 
        },
        {
            path: '/stuffies',
            name: 'stuffies',
            component: Stuffies 
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
       
    ]
})

export default router