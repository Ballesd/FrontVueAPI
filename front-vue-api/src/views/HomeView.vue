<template>
  <NavBar />

  <h1>Vista HOME, central</h1>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import axios from 'axios';

export default {
  name: "HomeView",
  created(){
    const response = axios.post('me');
    console.log(response);
  },  
  components: {
    NavBar,
  },
};
</script>
