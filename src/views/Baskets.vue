<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Baskets </h1>
    </v-col> 

    <SubHeader title="Baskets" />

    <ImageCards :items="list"></ImageCards>
  </v-content>
</template>

<script>
  import ImageCards from "@/components/ImageCards"
  import SubHeader from '@/components/SubHeader'

  export default {
    props: {
      source: String,
    },

    components: {
      ImageCards,
      SubHeader
    },

    data (){
      return {
        list: [
          {
              name: "Coral Basket",
              image: require("../assets/baskets/coral-basket.jpeg"),
          },
          {
              name: "Mango Basket",
              image: require("../assets/baskets/mango-basket.jpeg"),
          },
          {
              name: "Purple Basket",
              image: require("../assets/baskets/purple-basket.jpeg"),
          },
          {
              name: "White Basket",
              image: require("../assets/baskets/white-basket.jpeg"),
          }
        ]
      }
    }
  }
</script>