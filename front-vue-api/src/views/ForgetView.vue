<template>
    <NavBar />
    <div>
        <h3>Información de la cuenta</h3>
        <form>
            <div>
            <label for="MailUser">Correo: </label>
            <input placeholder="Correo(*)" type="email">
            </div>
            <br>
            <button>Enviar Mail</button>
        </form>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "ForgotView",
  components: {
    NavBar,
  },
};
</script>
