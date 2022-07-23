<template>
  <NavBar />
  <p>VISTA REGISTER está utilizando componente NavBar y unBotonReutilizable</p>

  <unBotonReutilizable />

  <p>USO EL BOTON SIN TENER QUE VOLVERLO A PROGRAMAR PORQUE LO TENGO COMO COMPONENTE</p>
  <unBotonReutilizable />
  <unBotonReutilizable />
  <unBotonReutilizable />
  <unBotonReutilizable />
  <unBotonReutilizable />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import unBotonReutilizable from "@/components/unBotonReutilizable.vue";
export default {
  name: "RegisterView",
  components: {
    NavBar,
    unBotonReutilizable,
  },
};
</script>

<style lang="scss" scoped></style>
