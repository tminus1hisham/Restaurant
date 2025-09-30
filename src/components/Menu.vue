<script setup>
import { useMenuStore } from '../stores/menu';
import { useRouter } from 'vue-router';
import {ref,computed,watch} from 'vue'

const router = useRouter()
const menuStore = useMenuStore()
const menu = menuStore.menu

//pagination trial
//pagination state
const currentPage = ref(1)
const itemsPerPage = ref(4) // Default page  size
const perPageOptions = [2,4,6,8,10] //Dropdown options

// Derived Values
const totalPages = computed(() =>
    Math.max(1,Math.ceil(itemsPerPage.value))
)

const paginatedItems = computed(() =>{
    const start = (currentPage.value - 1) * itemsPerPage.value
    return items.value.slice(start,start + itemsPerPage.value)
})

const showingLabel = computed(() => {
    const total =  items.value.length
    if (!total) return "No  items"
    const start = (currentPage.value -1) * itemsPerPage.value + 1
    const end = Math.min(start + itemsPerPage - 1,total)
    return `showing ${start}-${end} of ${total}`
})

// UX niceties
watch(itemsPerPage,()=> {currentPage.value = 1})
watch(totalPages, (tp)=> {if(currentPage.value>tp) currentPage.value = tp})

function view(menu){
    menuStore.updateSelectedMenuItem(menu) //keep track of the selected menu item
    router.push('/menuitem')
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6" class="d-flex align-center gap-4">
                <v-select
                 v-model="itemsPerPage"
                 :items="perPageOptions"
                 label="Cards per page"
                 variant = "outlined"
                 density = "comfortable"
                 style="max-width: 220;"
                />
            </v-col>
            <v-col cols="12" md="6">
                <v-pagination 
                v-model="currentPagePage"
                :length="totalPages"
                total-visible="8"
                density="comfortable"
                ></v-pagination>
            </v-col>
            <v-col md="3" v-for="item in menu" :key="item">
                <v-card color="#FF9800"  >
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
                        <v-card-title>{{ item.price }}</v-card-title>
                        <v-card-actions>
                            <v-btn @click="view(item)">View</v-btn>
                            <v-btn>Order</v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>