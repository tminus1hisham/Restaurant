import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu = {
    
    0:{
        name:'Fish Fillet',
        image:'/images/menu/9.jpg',
        price: 750,
        description:'A rare cat skillet diced and marinated for your taste',
        longDescription:'A tender fish fillet carefully seasoned, diced, and marinated with herbs and spices. Pan-seared to perfection and served hot, offering a delicate yet rich flavor ideal for seafood lovers.',
        category:'Food',
    },
    1:{
        name:'Loaded Fries',
        image:'/images/menu/10.jpg',
        price: 300,
        description:'Fries cooked in cheese and added with brazilian pork',
        longDescription:'Golden crispy fries topped generously with melted cheese and smoky Brazilian pork strips. A hearty snack that combines creaminess, crunch, and savory goodness in every bite.',
        category:'Food',
    },
    2:{
        name:'Ramen',
        image:'/images/menu/11.jpg',
        price: 700,
        description:'Hand baked noodles with marineri sauce accompanied with the traditional scones and eggs',
        longDescription:'A bowl of authentic ramen crafted with hand-baked noodles, rich marinara broth, and topped with traditional scones and boiled eggs. A fusion twist of East and West, bringing warmth and comfort.',
        category:'Food',
    },
    3:{
        name:'Bhajia',
        image:'/images/menu/12.jpg',
        price: 500,
        description:'Bhajia accompanied by beef patties',
        longDescription:'Crispy, spiced potato bhajias deep fried until golden, served alongside juicy beef patties. A perfect balance of spicy, crunchy, and meaty flavors that make a great snack or light meal.',
        category:'Snack',
    },
    4:{
        name:'Mashed potatoes and beef',
        image:'/images/menu/13.jpg',
        price: 500,
        description:'Mashed potatoes accompanied with Beef slices and seaweed',
        longDescription:'Creamy, buttery mashed potatoes paired with tender slices of beef, finished with a light garnish of seaweed for a unique savory kick. A wholesome and filling comfort dish.',
        category:'Food',
    },
    5:{
        name:'Honey glazed beef',
        image:'/images/menu/14.jpg',
        price: 400,
        description:'The finest Bulgarian steak dipped and cooked entirely in Honey',
        longDescription:'Premium Bulgarian steak cuts glazed with natural honey and slow-cooked until caramelized. The result is a succulent, sweet-and-savory delight that melts in your mouth.',
        category:'Food',
    },
    6:{
        name:'Skewers',
        image:'/images/menu/15.jpg',
        price: 100,
        description:'A skewer endowed with beef pork and chicken then dipped in barbacue sauce',
        longDescription:'Juicy skewers stacked with a trio of meats—beef, pork, and chicken—chargrilled to perfection and brushed with rich barbecue sauce for a smoky, tangy finish.',
        category:'Snack',
    },
    7:{
        name:'Kentucky Fried Chicken',
        image:'/images/menu/16.jpg',
        price: 450,
        description:'7 pieces of fried chicken',
        longDescription:'Seven crispy pieces of golden-brown chicken, fried in a signature Kentucky-style batter. Juicy inside, crunchy outside—perfect for sharing or enjoying solo.',
        category:'Food',
    },
    8:{
        name:'Vegetable salad',
        image:'/images/menu/17.jpg',
        price: 250,
        description:'A vegetarians delight consistiong of tomatoes, cauliflower, lettuce and black pepper',
        longDescription:'A fresh vegetarian salad with ripe tomatoes, crunchy cauliflower, crisp lettuce, and a sprinkle of black pepper. Light, healthy, and refreshing for any time of day.',
        category:'Salad',
    },
    9:{
        name:'Fruit salad',
        image:'/images/menu/18.jpg',
        price: 200,
        description:'An assortment of grapes, mangoes, strawberries and kiwi',
        longDescription:'A colorful assortment of fresh seasonal fruits including grapes, mangoes, strawberries, and kiwi. A sweet, juicy, and refreshing salad packed with vitamins.',
        category:'Salad',
    },
    10:{
        name:'Meat lovers salad',
        image:'/images/menu/19.jpg',
        price: 350,
        description:'A salad mixed with beef chunks and brocolli',
        longDescription:'A hearty salad for meat lovers—juicy chunks of beef tossed with fresh broccoli, drizzled with light dressing. Nutritious and filling while still crisp and flavorful.',
        category:'Salad',
    },
    11:{
        name:'Water',
        image:'/images/menu/water.jpg',
        price: 100,
        description:'A glass of Cold refreshing water',
        longDescription:'A simple yet essential refreshment: pure, cold, and refreshing water served chilled to quench your thirst and cleanse your palate.',
        category:'Drinks',
    },
    12:{
        name:'Tropical milkshake',
        image:'/images/menu/20.jpg',
        price: 300,
        description:'A cocktail of ice cream served with a piece of pineapple',
        longDescription:'A rich tropical blend of creamy ice cream and fresh pineapple, creating a milkshake that is both indulgent and refreshing. Topped with pineapple for an exotic finish.',
        category:'Drinks',
    },
    13:{
        name:'Margharita',
        image:'/images/menu/22.jpg',
        price: 750,
        description:'Margharita served with lemon',
        longDescription:'A classic Margharita cocktail served chilled with a twist of lemon. Smooth, refreshing, and perfect for cocktail enthusiasts looking for a timeless favorite.',
        category:'Cocktails',
    },
    14:{
        name:'Baileys Irish',
        image:'/images/menu/23.jpg',
        price: 1200,
        description:'A litre of the finest Irish whiskey',
        longDescription:'A full liter of Baileys Irish cream whiskey, smooth and velvety with a perfect blend of whiskey and cream. A luxurious drink for those who appreciate rich liqueurs.',
        category:'Alcohol',
    },
    15:{
        name:'Champagne',
        image:'/images/menu/28.jpg',
        price: 750,
        description:'Dazzle in the delight of our best Champagne',
        longDescription:'Celebrate in style with our finest Champagne, sparkling with elegance. Crisp, bubbly, and refreshing—ideal for special occasions or indulgent evenings.',
        category:'Alcohol',
    },
    16:{
        name:'Tea',
        image:'/images/menu/27.jpg',
        price: 200,
        description:'A glass of Green Tea',
        longDescription:'A hot cup of soothing green tea, lightly brewed for a refreshing and calming experience. Ideal for relaxation and boosting your mood naturally.',
        category:'Drinks',
    },
    17:{
        name:'Mohito',
        image:'/images/menu/26.jpg',
        price: 800,
        description:'Lemon Mohito',
        longDescription:'A refreshing mojito cocktail infused with lemon, mint leaves, and soda. Served chilled, it delivers a perfect balance of zest and coolness.',
        category:'Drinks',
    },
    18:{
        name:'Long Island Ice Tea',
        image:'/images/menu/25.jpg',
        price: 1000,
        description:'10% whisky and cranberry juice',
        longDescription:'A strong and bold cocktail made with whiskey and cranberry juice, offering a punchy yet smooth taste. Perfect for those who enjoy a powerful drink.',
        category:'Alcohol',
    },
    19:{
        name:'Pinacolada',
        image:'/images/menu/21.jpg',
        price: 600,
        description:'Pineapple juice',
        longDescription:'A creamy, tropical cocktail made from fresh pineapple juice, coconut cream, and a splash of rum. Smooth, sweet, and indulgent—a vacation in a glass.',
        category:'Drinks',
    },
    20:{
        name:'Captain Morgan',
        image:'/images/menu/24.jpg',
        price: 1200,
        description:'A litre of the finest Rum',
        longDescription:'A full liter of Captain Morgan premium rum, known for its smooth taste and rich flavor. A staple for classic cocktails and straight enjoyment.',
        category:'Alcohol',
    },
    
    // 11:{
        //     name:'',
        //     image:'/images/menu/.jpg',
        //     price: ,
        //     description:' ',
        //     category:'',
        // },
        
}
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})