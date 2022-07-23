<template>
  <div>
    <nav>
      <div>
        <router-link to="/" class="font-normal"> Home |</router-link>
        <router-link to="/Login" class="font-normal"> Login |</router-link>
        <router-link to="/Register" class="font-normal"> Registrarse </router-link>
        <router-link to="/Forgot" class="font-normal"> ¿Olvidaste tu contraseña? </router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: #42b983;
  
}
</style>
