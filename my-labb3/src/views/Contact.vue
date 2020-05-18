<template>
  <div class="contact">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Tel msg="for more contact me at : 1234567890" />
  </div>
</template>

<script>
// @ is an alias to /src
import Tel from "@/components/contactComponent.vue";

export default {
  name: "Contact",
  components: {
    Tel
  },

  data() {
    return {};
  }
};
</script>
