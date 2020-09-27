<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header"

export default {
  comments: { Header },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: $secondColor;
}

.wrapper {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
