<template>
  <login-panel v-if="!this.$store.state.user.isLogged"></login-panel>
  <Search v-else></Search>
</template>

<script>
import LoginPanel from "~/components/LoginPanel"
import Search from "~/components/SearchEngine/Search"
export default {
  components: {
    LoginPanel,
    Search,
  },
}
</script>

<style></style>
