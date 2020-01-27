<template>
  <v-container fluid >
    <v-row v-if="scarves">
      <v-card
        max-width="300"
        class="ma-7 pt-5"
        v-for="input in items"
        :key="input.name"
      >
        <v-container>
            <v-row justify="center">
            <v-img
            max-width="200"
            class="pb-5"
            :src="input.image"
            />
            <v-card-text style="font-size: 100%;" class="text-center"> {{input.name}} </v-card-text>
            </v-row>
        </v-container>
      </v-card>
    </v-row>
    <v-row v-else>
      <v-card
        max-width="300"
        class="ma-7 pt-5"
        v-for="input in items"
        :key="input.name"
      >
        <v-container>
            <v-row justify="center">
            <v-img
            max-width="200"
            height="200"
            class="pb-5"
            :src="input.image"
            />
            <v-card-text style="font-size: 100%;" class="text-center"> {{input.name}} </v-card-text>
            </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: {
    items: {
      type: Array
    },
    scarves: {
        type: Boolean
    }
  },

    data () {
        return {
            
        }
    }
}

</script>