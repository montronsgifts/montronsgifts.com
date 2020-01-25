<template>
  <v-app>
    <ApplicationBar />

    <v-content>
      <HomePage/>
    </v-content>
  </v-app>
</template>

<script>
import ApplicationBar from './components/ApplicationBar'
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    ApplicationBar,
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>
