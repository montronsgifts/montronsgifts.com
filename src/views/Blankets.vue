<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Crocheted & Tie Blankets </h1>
    </v-col> 

    <SubHeader title="Crocheted and Tie Blankets" />

    <v-tabs
      fixed-tabs
      background-color="transparent"
    >
      <v-tab @click="changeTab('crochet')"> Crocheted Blankets</v-tab>
      <v-tab @click="changeTab('tie')"> Tie Blankets </v-tab>
    </v-tabs>

    <ImageCards :items="filteredBlankets" :scarves=false></ImageCards>
  </v-content>
</template>

<script>
  import ImageCards from '@/components/ImageCards'
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
        selectedTab: "crochet",
        list: [
          {
              name: "Yellow & Gray Elephant with Gray Backing",
              type: "tie",
              image: require("../assets/blankets/elephant-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Blue, Orange & White Chunky Stitch",
              type: "crochet",
              image: require("../assets/blankets/blue-orange-blanket.jpg"),
              available: true
          },
          {
              name: "Chloe Filet Blanket",
              type: "crochet",
              image: require("../assets/blankets/chloe-filet-blanket.jpeg"),
              available: true
          },
          {
              name: "Green, Orange, Blue & White Granny Stripe Stitch",
              type: "crochet",
              image: require("../assets/blankets/green-orange-blue-blanket.jpg"),
              available: false
          },
          {
              name: "Purple, Pink & White Half-Double Stitch",
              type: "crochet",
              image: require("../assets/blankets/purple-blanket.jpg"),
              available: true
          },
          {
              name: "Purple, Lavendar & Gray Chunky Stitch",
              type: "crochet",
              image: require("../assets/blankets/thick-purple-blanket.jpg"),
              available: false
          },
          {
              name: "Turquoise, White, Coral, Light Green & Gray Shell Stitch",
              type: "crochet",
              image: require("../assets/blankets/shell-blanket.jpg"),
              available: false
          },
          {
              name: "Yellow, Gray & White Chunky Stitch",
              type: "crochet",
              image: require("../assets/blankets/yellow-gray-blanket.jpg"),
              available: false
          },
          {
              name: "Baseball with Red Backing",
              type: "tie",
              image: require("../assets/blankets/baseball-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Bear & Moose with Plaid Backing",
              type: "tie",
              image: require("../assets/blankets/bear-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Black, White & Gray Designed with Black Designed Backing",
              type: "tie",
              image: require("../assets/blankets/black-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Dinosaurs with Orange Backing",
              type: "tie",
              image: require("../assets/blankets/orange-dino-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Dinosaurs with Lime Green Backing",
              type: "tie",
              image: require("../assets/blankets/green-dino-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Zoo Animals with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/animal-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Marvel with Green Backing",
              type: "tie",
              image: require("../assets/blankets/marvel-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Owls with Brown Backing",
              type: "tie",
              image: require("../assets/blankets/owl-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Monkeys with Brown Backing",
              type: "tie",
              image: require("../assets/blankets/monkey-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Forest Animals with Green Paw Print Backing",
              type: "tie",
              image: require("../assets/blankets/forrest-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Puzzle with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/puzzle-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Dumptrucks with Red Backing",
              type: "tie",
              image: require("../assets/blankets/dumptruck-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Flamingo Filet Blanket",
              type: "crochet",
              image: require("../assets/blankets/flamingo-filet-blanket.jpeg"),
              available: false
          },
          {
              name: "Flamingos with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/flamingo-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Elephants with Gray Backing",
              type: "tie",
              image: require("../assets/blankets/blue-elephant-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Purple & Pink Plaid with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/pink-plaid-tie-blanket.jpg"),
              available: false
          },
          {
              name: "Elephant Sweet Baby with Purple Backing",
              type: "tie",
              image: require("../assets/blankets/sweet-elephant.jpg"),
              available: false
          },
          {
              name: "Dinosaur T-rex with Gray Stone Backing",
              type: "tie",
              image: require("../assets/blankets/dino-trex.jpg"),
              available: false
          }

        ]
      }
    },

    methods: {
      changeTab(tab) {
        this.selectedTab = tab;
      }
    },

    computed: {
      filteredBlankets: {
        get: function() {
          var type = this.selectedTab

          return this.list.filter(function (item) {
            return item.type == type;
          });
        }
      }
    }
  }
</script>