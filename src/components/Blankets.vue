<template>
  <v-content>
    <v-col class="text-center" style="color:black; font-size: 170%">
      <h1> Crocheted & Tie Blankets </h1>
    </v-col> 

    <v-col class="text-center" style="color:black; font-size: 100%">
    <p>
      To find the current Crocheted and Tie Blankets that are for sale, visit my
      <a href="https://www.etsy.com/shop/MonTronsGifts">Etsy Page</a>.
      </p> 
      </v-col> 

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
  import ImageCards from './ImageCards'

  export default {
    props: {
      source: String,
    },

    components: {
      ImageCards,
    },

    data (){
      return {
        selectedTab: "crochet",
        list: [
          {
              name: "Yellow & Gray Elephant with Gray Backing",
              type: "tie",
              image: require("../assets/blankets/elephant-tie-blanket.jpeg")
          },
          {
              name: "Blue, Orange & White Chunky Stitch",
              type: "crochet",
              image: require("../assets/blankets/blue-orange-blanket.jpeg")
          },
          {
              name: "Green, Orange, Blue & White Granny Stripe Stitch",
              type: "crochet",
              image: require("../assets/blankets/green-orange-blue-blanket.jpeg")
          },
          {
              name: "Purple, Pink & White Half-Double Stitch",
              type: "crochet",
              image: require("../assets/blankets/purple-blanket.jpeg")
          },
          {
              name: "Purple, Lavendar & Gray Chunky Stitch",
              type: "crochet",
              image: require("../assets/blankets/thick-purple-blanket.jpeg")
          },
          {
              name: "Turquoise, White, Coral, Light Green & Gray Shell Stitch",
              type: "crochet",
              image: require("../assets/blankets/shell-blanket.jpeg")
          },
          {
              name: "Yellow, Gray & White Chunky Stitch",
              type: "crochet",
              image: require("../assets/blankets/yellow-gray-blanket.jpeg")
          },
          {
              name: "Baseball with Red Backing",
              type: "tie",
              image: require("../assets/blankets/baseball-tie-blanket.jpeg")
          },
          {
              name: "Bear & Moose with Plaid Backing",
              type: "tie",
              image: require("../assets/blankets/bear-tie-blanket.jpeg")
          },
          {
              name: "Black, White & Gray Designed with Black Designed Backing",
              type: "tie",
              image: require("../assets/blankets/black-tie-blanket.jpeg")
          },
          {
              name: "Dinosaurs with Orange Backing",
              type: "tie",
              image: require("../assets/blankets/orange-dino-tie-blanket.jpeg")
          },
          {
              name: "Dinosaurs with Lime Green Backing",
              type: "tie",
              image: require("../assets/blankets/green-dino-tie-blanket.jpeg")
          },
          {
              name: "Zoo Animals with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/animal-tie-blanket.jpeg")
          },
          {
              name: "Marvel with Green Backing",
              type: "tie",
              image: require("../assets/blankets/marvel-tie-blanket.jpeg")
          },
          {
              name: "Owls with Brown Backing",
              type: "tie",
              image: require("../assets/blankets/owl-tie-blanket.jpeg")
          },
          {
              name: "Monkeys with Brown Backing",
              type: "tie",
              image: require("../assets/blankets/monkey-tie-blanket.jpeg")
          },
          {
              name: "Forest Animals with Green Paw Print Backing",
              type: "tie",
              image: require("../assets/blankets/forrest-tie-blanket.jpeg")
          },
          {
              name: "Puzzle with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/puzzle-tie-blanket.jpeg")
          },
          {
              name: "Dumptrucks with Red Backing",
              type: "tie",
              image: require("../assets/blankets/dumptruck-tie-blanket.jpeg")
          },
          {
              name: "Flamingos with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/flamingo-tie-blanket.jpeg")
          },
          {
              name: "Elephants with Gray Backing",
              type: "tie",
              image: require("../assets/blankets/blue-elephant-tie-blanket.jpeg")
          },
          {
              name: "Purple & Pink Plaid with Pink Backing",
              type: "tie",
              image: require("../assets/blankets/pink-plaid-tie-blanket.jpeg")
          },
          {
              name: "Elephant Sweet Baby with Purple Backing",
              type: "tie",
              image: require("../assets/blankets/sweet-elephant.jpeg")
          },
          {
              name: "Dinosaur T-rex with Gray Stone Backing",
              type: "tie",
              image: require("../assets/blankets/dino-trex.jpeg")
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