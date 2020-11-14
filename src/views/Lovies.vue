<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Lovies </h1>
    </v-col> 

    <SubHeader title="Lovies" />

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
              name: "Pink Lovey",
              image: require("../assets/lovies/pink-lovey.jpeg"),
          }
        ]
      }
    }
  }
</script>