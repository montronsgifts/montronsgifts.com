<template>
  <v-app id="inspire">
    
    <v-app-bar
      app
      color="indigo"
      dark
    >
       <v-tabs
        fixed-tabs
        background-color="indigo"
        dark
      >
        <v-tab>
          Home
        </v-tab>
        <v-tab>
          About
        </v-tab>
        <v-tab>
          Blog
        </v-tab>
        <v-tab>
          Blankets
        </v-tab>
        <v-tab>
          Scarves
        </v-tab>
        <v-tab>
          Books
        </v-tab>
        <v-tab>
          Contact Me
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <!--Grid system uses 12 columns so cols=12 means take up a whole row -->
          <v-col class="text-center" cols="12"> 
            <v-layout justify-center>
              <v-img
                justify="center"
                max-width="700"
                src="../assets/logo.jpg"
              ></v-img>
            </v-layout>
          </v-col>
          <v-col class="text-center">
              
              <p class="text-center"> 
                Fun, Educational, and Rhyming Self-Published Children's Books <br>
                Handmade Tie Blankets <br>
                Handmade Crocheted Blankets and Scarves<br>
                Find the perfect gift for friends or family and order online <br>
                or visit us at a local event near you! <br>
                Custom orders are available! Contact me for more information.
              </p>
                
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
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