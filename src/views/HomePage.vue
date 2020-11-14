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
          Monica Simpson is a wife and mother of three, Chloe, Leo, and Ava. 
          She is an author focusing on children’s books to share with her kids, along with many others. 
          Her first book, “ABCs with Animals”, was published in January 2019. 
          She has since then also published “123 at the Zoo”, “ABCs at School”, and “123 at the Candy Shop”. 
          Her books feature many rhymes and colorful illustrations. 
          She is continuing to work on several other children’s books to be published in the future.
        </p>  

        <p class="text-center" style="font-size:105%;">
          Monica also enjoys crocheting and making tie blankets. 
          She knows a variety of stitches and is continuing to learn and try new techniques all the time.
          Check out the pages on this site to get an idea of the things that she has made.
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