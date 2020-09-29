<template>
  <div>
    <login-panel v-if="!this.$store.state.user.isLogged"></login-panel>
    <repo-page v-else />
  </div>
</template>

<script>
import LoginPanel from "~/components/LoginPanel"
import RepoPage from "~/components/RepoDetails/RepoPage"
export default {
  name: "Index",
  components: {
    RepoPage,
    LoginPanel,
  },
}
</script>

<style scoped></style>
