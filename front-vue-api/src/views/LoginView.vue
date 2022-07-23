<template>
  <NavBar />
  <div>
    <form action="">
      <h3>Ingresar</h3>
      <div>
        <label for="">Email: </label>
        <input type="email" name="" id="" />
      </div>
      <div>
        <label for="">Contraseña: </label>
        <input type="password" />
      </div>
      <button>Ingresar</button>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "LoginView",
  components: {
    NavBar,
  },
};
</script>
