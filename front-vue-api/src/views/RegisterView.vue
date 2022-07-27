<template>
  <NavBar />
  <div>
    <h3>Registrarse</h3>
    <form @submit.prevent="Register">
      <div>
        <label for="nameUser">Nombre: </label>
        <input type="text" v-model="formData.name" />
      </div>
      <br />
      <div>
        <label for="MailUser">Correo: </label>
        <input type="email" v-model="formData.email" />
      </div>
      <br />
      <div>
        <label for="ConsUser">Contraseña: </label>
        <input type="password" v-model="formData.password" />
      </div>
      <br />
      <div>
        <label for="ConfiUser">Confirmar Contraseña: </label>
        <input type="password" v-model="formData.password_confirmation" />
      </div>
      <br />
      <button>Registrarse</button>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import unBotonReutilizable from "@/components/unBotonReutilizable.vue";
import axios from "axios";
export default {
  name: "RegisterView",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  components: {
    NavBar,
    unBotonReutilizable,
  },
  methods: {
    Register() {
      axios
        .post("register", this.formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
