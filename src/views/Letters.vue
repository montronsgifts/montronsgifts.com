<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Letters </h1>
    </v-col> 

    <SubHeader title="Letters" />

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
              name: "Adam Lee",
              image: require("../assets/letters/adam-lee-letters.jpg"),
          },
          {
              name: "Blue A",
              image: require("../assets/letters/a-blue.jpg"),
          },
          {
              name: "Pink E",
              image: require("../assets/letters/e-pink.jpeg"),
          },
          {
              name: "Red E",
              image: require("../assets/letters/e-red.jpg"),
          },
          {
              name: "Pink J",
              image: require("../assets/letters/j-pink.jpeg"),
          },
          {
              name: "Blue L",
              image: require("../assets/letters/l-blue.jpg"),
          },
          {
              name: "Green L",
              image: require("../assets/letters/l-green.jpeg"),
          },
          {
              name: "White M",
              image: require("../assets/letters/m-white.jpg"),
          }
        ]
      }
    }
  }
</script>