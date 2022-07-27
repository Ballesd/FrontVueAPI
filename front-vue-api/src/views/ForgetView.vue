<template>
  <NavBar />
  <div>
    <h3>Información de la cuenta</h3>
    <form @submit.prevent="forgot">
      <div>
        <label for="MailUser">Correo: </label>
        <input v-model="formData.email" placeholder="Correo(*)" type="email" />
      </div>
      <br />
      <button>Enviar Mail</button>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "ForgotView",
  components: {
    NavBar,
  },
  data() {
    return {
      formData: {
        email: "",
      },
    };
  },
  methods: {
    forgot() {
      const url = 'sendPasswordResetLink' + '?email=' + this.formData.email;
      console.log(url);
      axios.post(url,this.formData).then((res) => {
        console.log(res);
      });
      
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },
  },
};
</script>
