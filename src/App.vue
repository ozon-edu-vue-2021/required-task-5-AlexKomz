<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "./components/NavBar";

export default {
  components: { NavBar },
  created() {
    this.loading();
  },
  name: "App",
  methods: {
    ...mapActions(["loading"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
