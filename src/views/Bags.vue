<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Bags </h1>
    </v-col> 

    <SubHeader title="Bags" />

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
              name: "Blue Bag with White Strap",
              image: require("../assets/bags/blue-bag-white-strap.jpeg"),
          },
          {
              name: "Blue Bag",
              image: require("../assets/bags/blue-bag.jpeg"),
          },
          {
              name: "Gray Bag",
              image: require("../assets/bags/gray-bag.jpeg"),
          },
          {
              name: "Pink Orange Bag",
              image: require("../assets/bags/pink-orange-bag.jpeg"),
          },
          {
              name: "Purple Bag",
              image: require("../assets/bags/purple-bag.jpeg"),
          },
          {
              name: "Purple Bag 2",
              image: require("../assets/bags/purple-bag2.jpeg"),
          },
          {
              name: "Rainbow Bag",
              image: require("../assets/bags/rainbow-bag.jpeg"),
          }
        ]
      }
    }
  }
</script>