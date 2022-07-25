<template>
  <router-view/>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
 /* created(){
    const response = axios.post('me')
      .then(
          res => {
            console.log(res);
          }
        );
    console.log(response);
  },*/
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

</style>
