<template>
  <v-nav>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="indigo"
      dark
    >
      <v-list dense>
        <v-list-item nav to="/">
          <v-list-item-content>
            <v-list-item-title>Home/About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nav to="/blankets">
          <v-list-item-content>
            <v-list-item-title>Blankets</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nav to="/scarves">
          <v-list-item-content>
            <v-list-item-title>Scarves</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nav to="/books">
          <v-list-item-content>
            <v-list-item-title>Books</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nav to="/contactme">
          <v-list-item-content>
            <v-list-item-title>Contact Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      permanent
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </v-nav>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>