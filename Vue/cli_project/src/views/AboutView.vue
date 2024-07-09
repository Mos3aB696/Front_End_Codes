<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SayWelcome />
  </div>
</template>

<script>
// @ is an alias to /src
import SayWelcome from "@/components/SayWelcome.vue";

export default {
  components: {
    SayWelcome,
  },
};
</script>
