<template>
  <NavBar :user="user"/>

  <h2 >Vista HOME, central Bienvenido </h2>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
}; 
</script>
