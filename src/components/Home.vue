<script setup>

</script>

<template>
    <!-- carousel -->
     <v-container>
        <v-row>
            <v-carousel width="1200px" >
            <v-carousel-item src="/images/1.jpg"></v-carousel-item>
            <v-carousel-item src="/images/2.jpg"></v-carousel-item>
            <v-carousel-item src="/images/3.jpg"></v-carousel-item>
            <v-carousel-item src="/images/4.jpg"></v-carousel-item>
            <v-carousel-item src="/images/5.jpg"></v-carousel-item>
            </v-carousel>
        </v-row>
     </v-container>

    <!-- about -->
      <v-container>
        <v-row>
            <v-card align="center">
                <p class="text-h4"><b></b>WELCOME TO BARATIE!</p>
                <p class="text-h6">Baratie is a unique and vibrant restaurant inspired by the famous floating sea dining establishment from the anime and manga series One Piece. Our mission is to bring the adventurous spirit and culinary passion of the Baratie to life, offering guests a one-of-a-kind dining experience full of flavor, fun, and a touch of pirate flair.</p>

                <p class="text-h6">At Baratie, we celebrate the art of cooking with fresh, high-quality ingredients and expertly crafted dishes that combine international seafood delights and hearty meals reminiscent of the Grand Line seas. Our chefs are dedicated to preparing each plate with creativity and care, just like the legendary cook Sanji, who believes food is a way to connect people.</p>

                <p class="text-h6">Step aboard and enjoy our warm, nautical-themed atmosphere where the sights and sounds of a floating ship restaurant come alive. Whether you're craving a savory seafood feast, a refreshing drink, or a place to make new friends, Baratie is your destination for memorable meals and joyful moments.</p>

                <p class="text-h6">Join us to share in the spirit of adventure and delicious storytelling that only Baratie can offer—where every dish is a voyage and every visit is a celebration.</p>
            </v-card>
        </v-row>
      </v-container>

    <!-- news -->
      <v-container>
        <v-row>
          <v-col md="4">
            <v-card color="#FF9800">
              <v-img 
              src="/images/6.jpg"
              class="align-end text-white"
              height="200"
              cover
              >
                <v-card-title>Code Geass</v-card-title>
              </v-img><br>
              <v-card-subtitle>Lelauch the genius</v-card-subtitle>
              <v-card-subtitle>Lelouch (Lelouch Lamperouge) is the intelligent and strategic protagonist of Code Geass, famous for his tactical genius and the use of the supernatural power “Geass” to lead a rebellion for justice and revenge</v-card-subtitle>
              <v-card-actions>
                <v-btn>Read more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card color="#FF9800">
              <v-img 
              src="/images/7.jpg"
              class="align-end text-white"
              height="200"
              cover
              >
                <v-card-title>Demon Slayer</v-card-title>
              </v-img><br>
              <v-card-subtitle>Upper Moon Two Doma </v-card-subtitle>
              <v-card-subtitle>Doma is a powerful and charismatic antagonist from Demon Slayer: Kimetsu no Yaiba, known for his ice-based abilities as a demon and his complex personality blending cruelty with a twisted sense of calm. </v-card-subtitle>
              <v-card-actions>
                <v-btn>Read more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card  color="#FF9800">
              <v-img 
              src="/images/8.jpg"
              class="align-end text-white"
              height="200"
              cover
              >
                <v-card-title >One Piece</v-card-title>
              </v-img><br>
              <v-card-subtitle class="text-h6">Pirate Hunter Zoro</v-card-subtitle>
              <v-card-subtitle>Zoro (Roronoa Zoro) is a skilled swordsman from One Piece, known for his ambition to become the world’s greatest swordsman, his fierce loyalty, and mastery of three-sword fighting style.</v-card-subtitle>
              <v-card-actions>
                <v-btn>Read more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="4"></v-col>
        </v-row>
      </v-container>

    <!-- footer -->
     <v-container>
        <v-row>
          <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#FF9800">
                <div class="d-flex ga-3">
                <v-btn icon="mdi-facebook" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-twitter" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-instagram" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-linkepurple-lighten-1din" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-row>
      </v-container>

</template>