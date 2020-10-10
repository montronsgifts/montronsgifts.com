<template>
  <v-navigation-drawer
    app
    permanent
  >
    <v-row justify="center">
      <router-link to="/">
        <v-img
          max-width="200"
          src="../assets/transparent_logo.png"
        ></v-img>
      </router-link>
    </v-row>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.name"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="primary--text">{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      items: [
        {name: "Blankets", link: "/blankets"},
        {name: "Scarves", link: "/scarves"},
        {name: "Contact Me", link: "/contact"}
      ]
    }),
  }
</script>