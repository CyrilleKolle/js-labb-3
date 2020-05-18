<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Heading msg="Welcome to Advice.App" />

    <p :key="advice.id" v-for="advice in advices">{{advice.advice}}</p>

    <dl :key="activity.key" v-for="activity in activities">
      <dt>{{activity.activity}}</dt>

      <dd>{{activity.type}}</dd>
    </dl>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Heading
  },
  methods: {
    f() {
      fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(result => {
          this.advices = result;
        });
    }
  },
  created() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(result => {
        this.advices = result;
      });

    // fetch("https://www.boredapi.com/api/activity/")
    //   .then(response => response.json())
    //   .then(result => {
    //     this.activities = result;
    //   });
  },
  data() {
    return {
      advices: null,
      activities: null
    };
  }
};
</script>
