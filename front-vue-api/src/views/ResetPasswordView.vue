<template>
  <div>
    <div>
      <h3>Cambiar contraseña</h3>
      <form @submit.prevent="reset">
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
        <button>Cambiar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResetPassword",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    reset() {
      //const tokeni = this.$route.params.token;
      console.log(window.location);
      const url =
        'resetPassword' +
        window.location.search + '&' + 'email=' +
        this.formData.email + '&' + 'password=' + this.formData.password + 'password_confirmation=' +
        this.formData.password_confirmation;
      axios.post(url, this.formData).then((res) => {
        console.log(res);
      });
      
      setTimeout(() => {
        window.location.href = "/Login";
      }, 1000);
    },
  },
};
</script>