<template>
  <v-col class="text-center" style="color:black; font-size: 100%">
    <p>
      To find the current {{ title }} that are for sale, visit my
      <a href="https://www.etsy.com/shop/MonTronsGifts">Etsy Page</a>.
    </p>
    <p>
      To make a custom order <router-link to="/contact"> contact me</router-link>.
    </p> 
  </v-col> 
</template>

<script>
  export default {
    props: {
      title: String,
    },
  }
</script>