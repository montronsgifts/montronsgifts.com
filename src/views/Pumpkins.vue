<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Pumpkins </h1>
    </v-col> 

    <SubHeader title="Pumpkins" />

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
              name: "Green Pumpkin",
              image: require("../assets/pumpkins/green-pumpkin.jpg"),
          },
          {
              name: "Large Pumpkin Group",
              image: require("../assets/pumpkins/large-pumpkin-group.jpg"),
          },
          {
              name: "Pumpkin Group",
              image: require("../assets/pumpkins/pumpkin-group.jpg"),
          },
          {
              name: "Pumpkin Group 2",
              image: require("../assets/pumpkins/pumpkin-group2.jpg"),
          },
          {
              name: "White Pumpkin Small and Medium",
              image: require("../assets/pumpkins/white-pumpkin-small-medium.jpg"),
          },
          {
              name: "White Pumpkin",
              image: require("../assets/pumpkins/white-pumpkin.jpg"),
          }
        ]
      }
    }
  }
</script>