<template>
  <nav>
    <v-app-bar
      app
      permanent
      flat
      dark
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      :permanent="$vuetify.breakpoint.mdOnly"
      :temporary="$vuetify.breakpoint.smAndDown"
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
  </nav>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      items: [
        {name: "Books", link: "/books"},
        {name: "Blankets", link: "/blankets"},
        {name: "Scarves", link: "/scarves"},
        {name: "Contact Me", link: "/contact"}
      ]
    }),
  }
</script>