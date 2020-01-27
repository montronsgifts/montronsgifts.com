<template>
  <v-app>
    <ApplicationBar />

    <router-view></router-view>
  </v-app>
</template>

<script>
import ApplicationBar from './components/ApplicationBar'

export default {
  name: 'App',

  components: {
    ApplicationBar,
  },

  data: () => ({
    //
  }),
};
</script>
