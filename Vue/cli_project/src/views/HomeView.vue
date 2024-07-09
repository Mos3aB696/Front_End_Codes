<template>
  <div class="home">
    <div class="container">
      <div class="my-info">
        <div class="my-image">
          <img src="../assets/images/my_photo.jpg" alt="Mos3aB_image" />
        </div>
        <p>
          Transforming visions into vibrant web experiences with Vue.js, Laravel
          & MySQL. Your next big idea starts here!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style lang="scss">
.home {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    place-content: center;
    height: calc(100vh - 67.599px);
    .my-info {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      .my-image img {
        max-width: 350px;
        border-radius: 50%;
        border: 8px solid #41b883;
        padding: 2px;
        margin-left: 20px;
      }
      p {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
