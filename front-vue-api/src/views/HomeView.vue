<template>
  <NavBar />

  <h1>Vista HOME, solo está utilizando el COMPONENTE NAVBAR</h1>
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
