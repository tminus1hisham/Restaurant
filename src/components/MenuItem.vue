<script setup>
const menuItem = {
    
        name:'Fish Fillet',
        image:'/images/menu/9.jpg',
        price: 750,
        longDescription:'',
        description:'A rare cat skillet diced and marinated for your taste',
        category:'Food',
    
}
</script>

<template>
    <v-container fluid class="dflex fill height" align="center">
        <v-row>
            <v-col md="6" >
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-card-title>{{ menuItem.name }}</v-card-title>
                    <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                    <v-card-text>{{ menuItem.description }}</v-card-text>
                    <v-card-text>Quantity <v-text-field></v-text-field></v-card-text>
                    <v-card-actions>
                        <v-btn color="#E1F5FE">Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>