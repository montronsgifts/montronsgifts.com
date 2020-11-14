<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Hats </h1>
    </v-col> 

    <SubHeader title="Hats" />

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
              name: "Candy Corn HAt",
              image: require("../assets/hats/candy-corn-hat.jpeg"),
          },
          {
              name: "Pink Hat",
              image: require("../assets/hats/pink-hat.jpeg"),
          },
          {
              name: "Pink Moon Hat",
              image: require("../assets/hats/pink-moon-hat.jpeg"),
          }
        ]
      }
    }
  }
</script>