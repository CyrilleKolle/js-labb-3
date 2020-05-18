<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Heading msg="Welcome to Advice.App" />
<input type="button" @click="f" value="new advice" id="new">
    <p :key="advice.id" v-for="advice in advices">
     
      {{advice.advice}}
    </p>
    <!-- <p>
      <span id="new">Old</span>
      {{advices}}
    </p> -->

    <!-- <dl :key="activity.key" v-for="activity in activities">
      <dt>{{activity.activity}}</dt>

      <dd>{{activity.type}}</dd>
    </dl>-->

    <input id="in" type="button" @click="increment(1)" value="Yeep" />

    <p>{{$store.state.counterI}}</p>

    <input id="de" type="button" @click="decrement(1)" value="Nope" />

    <br />
    <p>write your review here</p>
    <input v-model="review" />
    {{review}}
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
  computed: {
    review: {
      get() {
        return this.$store.state.review
      },
      set(value) {
        this.$store.state.review = value
      }
    }
  },
  actions: {
    f() {
      fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(result => {
          // this.commit('setAdvice', )
          this.advices = result;
        });
    }
  },

  methods: {
    f() {
      fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(result => {
          this.advices = result;
        });
    },

    increment(amountToIncrease) {
      console.log("increase pressed");
      return this.$store.commit("myMutation", amountToIncrease);
    },
    decrement(amountToDecrease) {
      return this.$store.commit("myMutation2", amountToDecrease);
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
      activities: null,
      advice: null,
      newAdvice: null
    };
  }
};
</script>

