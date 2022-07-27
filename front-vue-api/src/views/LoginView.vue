<template>
  <NavBar />
  <div>
    <form @submit.prevent="Login">
      <h3>Ingresar</h3>
      <div>
        <label for="">Email: </label>
        <input type="email" v-model="formData.email" name="" id="" />
      </div>
      <br>
      <div>
        <label for="">Contraseña: </label>
        <input type="password" v-model="formData.password" />
      </div>
      <br>
      <button>Ingresar</button>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "LoginView",
  data (){
    return {
      formData: {
        email:'',
        password: '',
      }
    }
  },
  components: {
    NavBar,
  },
  methods: {
    Login(){
      
      axios.post('login',this.formData)
        .then((res) => {
          localStorage.setItem('token', res.data.access_token);
        });

        //console.log(token);
        this.$router.push('/');
    }
  }
};
</script>
