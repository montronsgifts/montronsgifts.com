<template>
    <v-content>

      <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Children's Books </h1>
    </v-col> 

    <v-col class="text-center" style="color:black; font-size: 100%">
    <p>
      To find the current Children's Books that are for sale, visit my
      <a href="http://www.lulu.com/spotlight/MonicaSimpson">Spotlight Page</a>. 
      </p> 
      </v-col> 

      <ImageCards :items="list" :scarves=true></ImageCards>
    </v-content>
</template>



<script>
  import ImageCards from "@/components/ImageCards"

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
              name: "ABCs with Animals",
              image: require("../assets/ABCs-with-Animals.png"),
              available: true
          },
          {
              name: "123 at the Zoo",
              image: require("../assets/123-at-the-Zoo.png"),
              available: true
          },
          {
              name: "ABCs at School",
              image: require("../assets/ABCs-at-School.png"),
              available: true
          },
          {
              name: "123 at the Candy Shop",
              image: require("../assets/123-at-the-Candy-Shop.png"),
              available: true
          }
        ]
      }
    }
  }
</script>