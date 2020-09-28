<template>
  <login-panel v-if="!this.$store.state.user.isLogged"></login-panel>
</template>

<script>
import LoginPanel from "~/components/LoginPanel"
export default {
  components: {
    LoginPanel,
  },
}
</script>

<style></style>
