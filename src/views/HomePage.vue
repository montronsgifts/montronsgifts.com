<template>
  <v-content>
    <v-container
      class="fill-height text-center primary--text"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <!--Grid system uses 12 columns so cols=12 means take up a whole row -->
        <v-col cols="12">
          <v-row justify="center">
            <v-card flat>
              <v-img
                max-width="700"
                src="../assets/transparent_logo.png"
              ></v-img>
            </v-card>
          </v-row>
        </v-col>

        <v-col>
            <h1> Fun, Educational, and Rhyming Self-Published Children's Books </h1>
            <h1> Handmade Tie Blankets </h1>
            <h1> Handmade Crocheted Blankets and Scarves </h1>
            <p style="font-size:140%;"> 
              Find the perfect gift for friends or family and order online <br>
              or visit us at a local event near you! <br>
              Custom orders are available! Contact me for more information.
            </p>

            <v-col style="font-size:140%;">
                <h1> About Monica Simpson </h1>
            </v-col> 

        <v-layout justify-center class="pb-5">
          <v-card flat>
            <v-img
              max-width="700"
              src="../assets/spotlight-picture.jpeg"
            ></v-img>
          </v-card>
        </v-layout>

        <p style="font-size:105%;">
          Monica Simpson is a wife and mother of two, Chloe and Leo, with another one on the way. 
          She is an author focusing on children’s books to share with her kids, along with many others. 
          Her first book, “ABCs with Animals”, was published in January 2019. 
          She has since then also published “123 at the Zoo”, “ABCs at School”, and “123 at the Candy Shop”. 
          Her books feature many rhymes and colorful illustrations. 
          She is continuing to work on several other children’s books to be published in the future.
        </p>  

        <v-layout justify-center class="pb-5">
          <v-card flat>
            <v-img
              max-width="700"
              max-height="510"
              src="../assets/family-picture.jpg"
            ></v-img>
          </v-card>
        </v-layout>

        <p class="text-center" style="font-size:105%;">
          When not working on her books, Monica enjoys crocheting blankets and scarves and making tie blankets. 
          She has made many different blankets and scarves of various patterns, sizes, and colors. 
          She focuses on making brightly colored baby blankets and lap blankets, 
          but also occasionally makes larger blankets.
          She knows a variety of stitches and is continuing to learn and try new techniques all the time. 
          Monica also loves taking custom orders, so if you have something in mind that you don't see on the 
          website, contact her and she would love to help create something special for you.
        </p> 

        <v-layout justify-center class="pb-5">
          <v-card flat>
            <v-img
              max-width="700"
              max-height="510"
              src="../assets/blankets-books.jpeg"
            ></v-img>
          </v-card>
        </v-layout>

        <p class="text-center" style="font-size:105%;">
          All of Monica's creations that are currently finished and for sale can by found on her 
          <a href="https://www.etsy.com/shop/MonTronsGifts">Etsy Page</a>.
        </p> 
        
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>