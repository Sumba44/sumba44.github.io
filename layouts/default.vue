<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import axios from "axios";

// axios.defaults.headers.common["user-key"] = "6215325e679fd0738f36be75c3207317";

// axios.defaults.headers.common['Authorization'] = "qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875";

axios.defaults.headers.common['Authorization'] = "alLcrgetrUCPPYxJ, 716dcb5c2a4839d0fb6c6b0735963ce539bd8c92675453dd14a3d4079a255a9b";

export default {
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
