<template>
  <div class="header">
    <div class="container">
      <div class="logo">Mos3aB</div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <!-- Use replace to make return to root page not previous page -->
        <router-link to="/help" replace>Help</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
.header {
  background-color: #f1f1f1;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #41b883;
  }
  nav {
    padding: 0;
  }
}
</style>
