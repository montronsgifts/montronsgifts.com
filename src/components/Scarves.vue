<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Scarves </h1>
    </v-col> 

    <v-col class="text-center" style="color:black; font-size: 100%">
       <p>
      To find the current Scarves that are for sale, visit my
      <a href="https://www.etsy.com/shop/MonTronsGifts">Etsy Page</a>.
      </p> 
   </v-col> 

    <ImageCards :items="list" :scarves=true></ImageCards>
  </v-content>
</template>

<script>
  import ImageCards from "./ImageCards"

  export default {
    props: {
      source: String,
    },

    components: {
      ImageCards,
    },
    
    data (){
      return {
        list: [
          {
              name: "Orange, Black & White Chunky Stitch",
              image: require("../assets/scarves/bengals-scarf.jpeg")
          },
          {
              name: "Black & Gray Variegated Thick & Soft Single Stitch",
              image: require("../assets/scarves/black-fuzzy-scarf.jpeg")
          },
          {
              name: "Black and Gray Single-Double Stitch",
              image: require("../assets/scarves/black-gray-scarf.jpeg")
          },
          {
              name: "Black & Gray Variegated Thick & Soft Single Stitch",
              image: require("../assets/scarves/black-gray-white-scarf.jpeg")
          },
          {
              name: "Black Half-Double Stitch",
              image: require("../assets/scarves/black-scarf.jpeg")
          },
          {
              name: "Black & White Single-Double Stitch",
              image: require("../assets/scarves/black-white-scarf.jpeg")
          },
          {
              name: "Blue, Purple & Green Variegated Thick & Soft Single Stitch",
              image: require("../assets/scarves/blue-fuzzy-scarf.jpeg")
          },
          {
              name: "Blue & White Chunky Stitch",
              image: require("../assets/scarves/blue-scarf.jpeg")
          },
          {
              name: "Lime Green, Navy, & White Chunky Stitch",
              image: require("../assets/scarves/green-black-scarf.jpeg")
          },
          {
              name: "Burgundy & Blue Variegated Thick & Soft Single Stitch",
              image: require("../assets/scarves/multi-color-scarf.jpeg")
          },
          {
              name: "Red, Gray & White Chunky Stitch Stitch",
              image: require("../assets/scarves/ohio-state-scarf.jpeg")
          },
          {
              name: "Burnt Orange Thick & Soft Single Stitch",
              image: require("../assets/scarves/orange-fuzzy-scarf.jpeg")
          },
          {
              name: "Peach & White Chunky Stitch",
              image: require("../assets/scarves/orange-white-scarf.jpeg")
          },
          {
              name: "Lavendar & Gray Variegated Thick & Soft Single Stitch",
              image: require("../assets/scarves/pink-scarf.jpeg")
          },
          {
              name: "Purple & Lavendar Single Stitch",
              image: require("../assets/scarves/purple-stripe-scarf.jpeg")
          },
          {
              name: "Burguny Thick & Soft Single Stitch",
              image: require("../assets/scarves/red-long-scarf.jpeg")
          },
          {
              name: "Burguny Thick & Soft Single Stitch",
              image: require("../assets/scarves/red-scarf.jpeg")
          },
          {
              name: "Blue & Gray Wavelength Stitch",
              image: require("../assets/scarves/scarf.jpeg")
          },
          {
              name: "Yellow, Gray & White Half-Double Stitch",
              image: require("../assets/scarves/yellow-white-gray-scarf.jpeg")
          },
          {
              name: "Pink & White with Colorful Stripes Half-Double Stitch",
              image: require("../assets/scarves/pink-stripe-scarf.jpeg")
          },
          {
              name: "Pink, Green & White Chunky Stitch",
              image: require("../assets/scarves/green-pink-scarf.jpeg")
          }
        ]
      }
    },
  }
</script>