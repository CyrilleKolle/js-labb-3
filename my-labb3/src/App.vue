<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
    <!-- 
    <input id="in" type="button" @click="increment(1)" value="Yeep" />

    <p>{{$store.state.counterI}}</p>

    <input id="de" type="button" @click="decrement(1)" value="Nope" />-->

    <!-- <p>{{$store.state.counterD}}</p> -->
  </div>
</template>
<script>
export default {
  computed: {
    // name:{
    //   get(){
    //     return this.$store.state.name
    //   },
    //   set(){}
    // }
  },
  methods: {
    increment(amountToIncrease) {
      console.log("increase pressed");
      return this.$store.commit("myMutation", amountToIncrease);
    },
    decrement(amountToDecrease) {
      return this.$store.commit("myMutation2", amountToDecrease);
    }
  }
};
</script>

<style>
#in {
  background-color: green;
  color: black;
}
#de {
  color: black;
  background-color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#new {
  border: brown;
  background-color: darkcyan;
  color: black;
}
</style>
