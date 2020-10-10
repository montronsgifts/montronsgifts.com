<template>
  <v-container fluid >
    <v-row>
      <v-card
        max-width="300"
        class="ma-7 pt-5"
        v-for="input in items"
        :key="input.name"
        flat
      >
        <v-container>
          <v-row justify="center">
            <v-img
              max-width="200"
              contain
              class="pb-5"
              :src="input.image"
            />
          </v-row>
          <v-row v-if="input.available" justify="center" class="font-weight-bold primary--text">
            AVAILABLE
          </v-row>
          <v-row v-else justify="center" class="font-weight-bold">
            SOLD
          </v-row>
          <v-row justify="center">
            <v-btn
              v-if="input.available"
              color="primary"
            >
            Order
            </v-btn>
            <v-btn 
              v-else
              color="primary"
            >
            Custom Order
            </v-btn>
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