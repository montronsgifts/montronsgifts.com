<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Scrubbies </h1>
    </v-col> 

    <SubHeader title="Scrubbies" />

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
              name: "Scrubby Group",
              image: require("../assets/scrubbies/scrubby-group.jpg"),
          }
        ]
      }
    }
  }
</script>