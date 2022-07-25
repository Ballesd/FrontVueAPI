<template>
  <div>
    <nav>
      <div>
        <ul v-if="!user">
          <li>
            <router-link to="/" class="font-normal"> Home </router-link>
          </li>
          <li>
            <router-link to="/Login" class="font-normal"> Login </router-link>
          </li>
          <li>
            <router-link to="/Register" class="font-normal"> Registrarse </router-link>
          </li>
          
          <li>
            <router-link to="/Forgot" class="font-normal"> ¿Olvidaste tu contraseña? </router-link>
          </li>
        </ul>

      </div>
      <!--
      <div>
        <ul v-if="!user">
          <li>
            <a href="javascript:void(0)" @click="exit" class="font-normal"> LogOut </a>
          </li>
        </ul>
      </div>
      --> 
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Nav',
  props: ['user'],
  methods:{
    exit(){
      axios.post('logout')
        .then((res) => {
          localStorage.removeItem('token');
        });;
      
    }
  }
}
</script>


<style scoped>
nav a.router-link-exact-active {
  color: #42b983;
  
}
</style>
