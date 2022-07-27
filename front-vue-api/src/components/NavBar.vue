<template>
  <div>
    <nav>
      <div>
        <router-link to="/" class="font-normal"> Home </router-link>
        <h2 v-if="user">
          Vista HOME, central Bienvenido {{ user.name }} {{ user.email }}
        </h2>
        <h2 v-if="!user">Hola, No estas logeado</h2>
        <ul v-if="!user">
          <li>
            <router-link to="/Login" class="font-normal"> Login </router-link>
          </li>
          <li>
            <router-link to="/Register" class="font-normal">
              Registrarse
            </router-link>
          </li>

          <li>
            <router-link to="/Forgot" class="font-normal">
              ¿Olvidaste tu contraseña?
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul v-if="user">
          <li>
            <a href="javascript:void(0)" @click="exit" class="font-normal">
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Nav",
  data() {
    return {
      user: null,
    };
  },
  created() {
    const response = axios.post("me").then((res) => {
      //console.log(res);
      this.user = res.data;
    });
    //this.user = response.data;
    console.log("datos del usuario: ", this.user);
  },
  methods: {
    exit() {
      //Envio de los datos de la API con axios (metodo post)
      axios.post("logout").then((res) => {
        localStorage.removeItem("token");
      });
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      /*
      created(() => {
        const response = axios.post("me").then((res) => {
          //console.log(res);
          this.user = res.data;
        });
        //this.user = response.data;
        console.log("datos del usuario: ", this.user);
      });*/
    },
  },
};
</script>


<style scoped>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
