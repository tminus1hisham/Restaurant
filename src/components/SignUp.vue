<script setup>
import {ref} from 'vue'

const showPassword = ref(false)
const showConfirmPassword = ref (false)
//models
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const deliveryAddress = ref(null)
const password = ref(null)

function signup(){
    const signUpData = {
        'name':name.value,
        'email':email.value,
        'phone':phone.value,
        'deliveryAddress':deliveryAddress.value,
        'password':password.value,

    }
    try{
        // save data on browser
        localStorage.setItem("signUpData",JSON.stringify(signUpData));

        // To do: send data to backend
    } catch (err){
        console.error('Sign Up process has failed',err)
    }
}

</script>

<template>
    <v-container align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6" width="600" color="#B0BEC5">
                    <v-card-title>Sign Up</v-card-title>
                    <v-text-field v-model="name" label="Name" placeholder="Hisham"  
                    :rules="[(v) => !!v || 'Name is required']" ></v-text-field>
                    <v-text-field v-model="email" label="Email" placeholder="hisham@gmail.com"
                    :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must contain @',
                        ]"
                        required
                    >
                </v-text-field>
                    <v-text-field v-model="phone" label="Phone" placeholder="+254712345678" type="number"></v-text-field>
                    <v-text-field v-model="deliveryAddress" label="Delivery Address" placeholder="Madaraka,Nairobi" 
                    :rules="[(v) => !!v || 'Delivery Address is required']"></v-text-field>
                    <v-text-field v-model="password" label="Password" placeholder="*****" 
                     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required></v-text-field>
                    <v-text-field  label="Confirm Password" placeholder="*****" 
                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === password || 'Passwords must match',
                        ]"
                        required></v-text-field>
                    <v-card-text>
                        Already Registered
                        <router-link to="/login">Back to Login</router-link>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn block color="#FF9800" variant="elevated" @click="signup()">Sign  Up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>