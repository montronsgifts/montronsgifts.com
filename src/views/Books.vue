<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Children's Books </h1>
    </v-col> 

    <SubHeader title="Children's Books" />

    <ImageCards :items="list" :scarves=true></ImageCards>
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
              name: "ABCs with Animals",
              image: require("../assets/books/ABCs-with-Animals.png"),
              available: true
          },
          {
              name: "123 at the Zoo",
              image: require("../assets/books/123-at-the-Zoo.png"),
              available: true
          },
          {
              name: "ABCs at School",
              image: require("../assets/books/ABCs-at-School.png"),
              available: true
          },
          {
              name: "123 at the Candy Shop",
              image: require("../assets/books/123-at-the-Candy-Shop.png"),
              available: true
          }
        ]
      }
    }
  }
</script>