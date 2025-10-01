import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import Menu from '@/components/Menu.vue'
import MenuItem from '@/components/MenuItem.vue'
import Orders from '@/components/Orders.vue'
import Reservations from '@/components/Reservations.vue'
import ContactUs from '@/components/ContactUs.vue'
import UserProfile from '@/components/UserProfile.vue'
import Admin from '@/components/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/' ,
      component:  Home
    },
    {
      name: 'Login',
      path: '/Login' ,
      component:  Login
    },
    {
      name: 'signup',
      path: '/signup' ,
      component: SignUp
    },
    {
      name: 'Menu',
      path: '/menu' ,
      component: Menu
    },
    {
      name: 'contactus',
      path: '/contactus' ,
      component:  ContactUs
    },
    {
      name: 'MenuItem',
      path: '/Menuitem' ,
      component:  MenuItem
    },
    {
      name: 'Orders',
      path: '/Orders' ,
      component: Orders
    },
    {
      name: 'Reservations',
      path: '/Reservation' ,
      component:  Reservations
    },
    {
      name: 'UserProfile',
      path: '/UserProfile' ,
      component:  UserProfile
    },
    {
      name: 'admin',
      path: '/admin' ,
      component:  Admin
    },
  ],
})

export default router
