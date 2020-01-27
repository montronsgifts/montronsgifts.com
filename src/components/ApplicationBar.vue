<template>
  <v-navigation-drawer
    app
    permanent
    color="indigo"
    dark
  >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item to="/" > Home/About </v-list-item>
      <v-list-item to="/blankets"> Blankets </v-list-item>
      <v-list-item to="/scarves"> Scarves </v-list-item>
      <v-list-item to="/books"> Books </v-list-item>
      <v-list-item to="/contactme"> Contact Me </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>