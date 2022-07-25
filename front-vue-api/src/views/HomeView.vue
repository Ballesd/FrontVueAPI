<template>
  <NavBar :user="user"/>

  <h1>Vista HOME, central</h1>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  props: ['user'],  
  components: {
    NavBar,
  },
};
</script>
