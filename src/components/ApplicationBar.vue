<template>
  <v-app-bar
    app
    permanent
    flat
  >
  </v-app-bar>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      items: [
        {name: "Home", link: "/"},
        {name: "Blankets", link: "/blankets"},
        {name: "Scarves", link: "/scarves"},
        {name: "Contact Me", link: "/contact"}
      ]
    }),
  }
</script>