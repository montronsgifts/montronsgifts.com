<template>
    <v-content>

<v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Contact Me </h1>
    </v-col> 

    <p>
      <v-col class="text-center" style="color:black; font-size: 150%">
        Feel free to contact me with any questions, suggestions, or comments you may have. <br>
        Contact me if you would like to discuss a custom order! <br> 
        Check out my <a href="https://www.facebook.com/monica.buettner.9">Facebook Page</a>! <br>
        <a href = "mailto: mrssimpson8616@gmail.com">Email</a> Me! <br>
        Contact me by Phone: 419.615.5487
      </v-col>
    </p> 
    
      
  
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