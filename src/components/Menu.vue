<script setup>

const menu = {
    0:{
        name:'Fish Fillet',
        image:'/images/menu/9.jpg',
        price: 750,
        description:'A rare cat skillet diced and marinated for your taste',
        category:'Food',
    },
    1:{
        name:'Loaded Fries',
        image:'/images/menu/10.jpg',
        price: 300,
        description:'Fries cooked in cheese and added with brazilian pork',
        category:'Food',
    },
    2:{
        name:'Ramen',
        image:'/images/menu/11.jpg',
        price: 700,
        description:'Hand baked noodles with marineri sauce accompanied with the traditional scones and eggs',
        category:'Food',
    },
    3:{
        name:'Bhajia',
        image:'/images/menu/12.jpg',
        price: 500,
        description:'Bhajia accompanied by beef patties',
        category:'Snack',
    },
    4:{
        name:'Mashed potatoes and beef',
        image:'/images/menu/13.jpg',
        price: 500,
        description:'Mashed potatoes accompanied with Beef slices and seaweed',
        category:'Food',
    },
    5:{
        name:'Honey glazed  beef',
        image:'/images/menu/14.jpg',
        price: 400,
        description:'The finest Bulgarian steak dipped and cooked entirely in Honey ',
        category:'Food',
    },
    6:{
        name:'Skewers',
        image:'/images/menu/15.jpg',
        price: 100,
        description:'A skewer endowed with beef pork and chicken then dipped in barbacue sauce ',
        category:'Snack',
    },
    7:{
        name:'Kentucky Fried Chicken',
        image:'/images/menu/16.jpg',
        price: 450,
        description:'7 pieces of fried chicken',
        category:'Food',
    },
    8:{
        name:'Vegetable salas',
        image:'/images/menu/17.jpg',
        price: 250,
        description:' A vegetarians delight consistiong of tomatoes, cauliflower, lettuce and black pepper',
        category:'Salad',
    },
    9:{
        name:'Fruit salad',
        image:'/images/menu/18.jpg',
        price: 200,
        description:'An assortment of grapes ,mangoes , strawberries and kiwi',
        category:'Salad',
    },
    10:{
        name:'Meat lovers salad',
        image:'/images/menu/19.jpg',
        price: 350,
        description:'A salad mixed with beef chunks and brocolli ',
        category:'Salad',
    },
    11:{
        name:'Water',
        image:'/images/menu/water.jpg',
        price: 100,
        description:'A glass of Cold refreshing water ',
        category:'Drinks',
    },
    12:{
        name:'Tropical milkshake',
        image:'/images/menu/20.jpg',
        price:300 ,
        description:' A coacktail of ice cream served with a piece of pineapple ',
        category:'Drinks',
    },
    13:{
        name:'Margharita',
        image:'/images/menu/22.jpg',
        price: 750,
        description:'Margharita served with lemon ',
        category:'Cocktails',
    },
    14:{
        name:'Baileys Irish',
        image:'/images/menu/23.jpg',
        price: 1200,
        description:'A litre of the finest Irish whiskey',
        category:'Alcohol',
    },
    // 11:{
    //     name:'',
    //     image:'/images/menu/.jpg',
    //     price: ,
    //     description:' ',
    //     category:'Food',
    // },
    // 11:{
    //     name:'',
    //     image:'/images/menu/.jpg',
    //     price: ,
    //     description:' ',
    //     category:'Food',
    // },
    // 11:{
    //     name:'',
    //     image:'/images/menu/.jpg',
    //     price: ,
    //     description:' ',
    //     category:'Food',
    // },
    // 11:{
    //     name:'',
    //     image:'/images/menu/.jpg',
    //     price: ,
    //     description:' ',
    //     category:'Food',
    // },
    // 11:{
    //     name:'',
    //     image:'/images/menu/.jpg',
    //     price: ,
    //     description:' ',
    //     category:'Food',
    // },
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="3" v-for="item in menu" :key="item">
                <v-card color="#E1F5FE"  >
                    <v-img :src="item.image" height="250" cover></v-img>
                        <v-row>
                            <v-col md="6">
                                <v-card-title>{{ item.name }}</v-card-title>
                            </v-col>
                            <v-col md="6">
                                <v-chip>{{ item.category }}</v-chip>
                            </v-col>
                        </v-row>
                        <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                        <v-card-actions>
                            <v-card-title>{{ item.price }}</v-card-title>
                            <v-btn>Order</v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>