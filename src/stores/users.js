import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
       const users = {
        0:{
            name: 'Sasuke Uchiha',
            email: "uchiha@leaf.com",
            phone: 254712345678,
            deliveryAddress: '123,Hidden Leaf',
            password: 'Itachi123',
            userType: 'Customer',
            activeAccount: true,
        },
        1:{
            name: 'Naruto Uzumaki',
            email: "uzumaki@leaf.com",
            phone: 254712345687,
            deliveryAddress: '132,Hidden Leaf',
            password: 'hokage07',
            userType: 'Customer',
            activeAccount: true,
        },
        2:{
            name: 'Sakura Haruno',
            email: "haruno@leaf.com",
            phone: 254712349876,
            deliveryAddress: '123,Hidden Leaf',
            password: 'sasuke01',
            userType: 'Customer',
            activeAccount: true,
        },
        3:{
            name: 'Kakashi Hatake',
            email: "hatake@leaf.com",
            phone: 254709876543,
            deliveryAddress: '987,Hidden Leaf',
            password: 'obitorin',
            userType: 'Admin',
            activeAccount: true,
        },
        4:{
            name: 'Might Guy',
            email: "guy@leaf.com",
            phone: 254712345890,
            deliveryAddress: '342,Hidden Leaf',
            password: 'kakashi1',
            userType: 'Customer',
            activeAccount: false,
        },
        5:{
            name: 'Hinata Hyuga',
            email: "hyuga@leaf.com",
            phone: 254789765432,
            deliveryAddress: '125,Hidden Leaf',
            password: 'uzumaki1',
            userType: 'Customer',
            activeAccount: true,
        },
        // 6:{
        //     name: 'S',
        //     email: "@leaf.com",
        //     phone: 2547,
        //     deliveryAddress: ',Hidden Leaf',
        //     password: '',
        //     userType: 'Customer',
        //     activeAccount: true,
        // },
       }
       return { users }
       
       
    },
    actions:{

    }
})