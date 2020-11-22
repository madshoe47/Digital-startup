<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Tilføj testpersoner</router-link>
      <router-link to="/about">Se testpersoner</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background: #000;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
