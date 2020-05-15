<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Advice.App" />

    <p :key="advice.id" v-for="advice in advices">{{advice.advice}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(result => {
        this.advices = result;
      });
  },
  data() {
    return {
      advices: null
    };
  }
};
</script>
