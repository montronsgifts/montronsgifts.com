<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Stuffies </h1>
    </v-col> 

    <SubHeader title="Stuffies" />

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
              name: "Blue Bear",
              image: require("../assets/stuffies/blue-bear.jpeg"),
          },
          {
              name: "Gray Bear",
              image: require("../assets/stuffies/gray-bear.jpeg"),
          },
          {
              name: "Gray Bear 2",
              image: require("../assets/stuffies/gray-bear2.jpeg"),
          },
          {
              name: "Gray Bear 3",
              image: require("../assets/stuffies/gray-bear3.jpeg"),
          },
          {
              name: "Gray Bunny",
              image: require("../assets/stuffies/gray-bunny.jpeg"),
          },
          {
              name: "Green Shark",
              image: require("../assets/stuffies/green-shark.jpeg"),
          },
          {
              name: "Ice Cream",
              image: require("../assets/stuffies/icecream.jpeg"),
          },
          {
              name: "Pink Flamingo",
              image: require("../assets/stuffies/pink-flamingo.jpeg"),
          },
          {
              name: "Pink Llama",
              image: require("../assets/stuffies/pink-llama.jpeg"),
          },
          {
              name: "White Cloud",
              image: require("../assets/stuffies/white-cloud.jpeg"),
          }
        ]
      }
    }
  }
</script>