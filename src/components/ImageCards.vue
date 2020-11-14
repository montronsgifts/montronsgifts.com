<template>
  <v-container fluid >
    <v-row justify="center">
      <v-card
        max-width="300"
        v-for="input in items"
        :key="input.name"
        flat
      >
        <v-container>
          <v-row justify="center">
            <v-img
              max-height="250"
              contain
              class="pb-5"
              :src="input.image"
            />
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