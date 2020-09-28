<template>
  <section class="login">
    <div class="login__form">
      <h1 class="login__title">
        <span
          >Connect with
          <img class="login__logo" src="~/assets/images/git.png" alt="logo" />
        </span>
        <span>to explore App</span>
      </h1>
      <button-control @click="loginGit">
        <img
          class="login__icon"
          src="~/assets/images/mark-light.png"
          alt="git_icon"
        />
        Login with GitHub
      </button-control>
    </div>
  </section>
</template>

<script>
import ButtonControl from "~/components/UI/ButtonControl"

export default {
  name: "LoginPanel",
  components: {
    ButtonControl,
  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    loginGit() {
      // eslint-disable-next-line no-undef
      OAuth.initialize("O4hE0DN1V22uweSyF0deFcjiSHE")
      // eslint-disable-next-line no-undef
      OAuth.popup("github").then((github) => {
        // OAuth provider url
        github
          .get("/user")
          .then((data) => {
            console.log("self data:", data)
            const userProfile = {
              name: data.name,
              thumbnail: data.avatar_url,
              url: data.html_url,
            }
            this.$store.commit("user/setUser", userProfile)
          })
          .then(() => {
            this.$store.commit("user/setStatus")
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;

  &__form {
    height: 300px;
    width: 400px;
    border-radius: 15px;
    background-color: $fontColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 25px -8px rgba(0, 0, 0, 0.75);
    margin-top: 50px;
  }

  &__logo {
    height: 40px;
  }

  &__inputs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__title {
    font-size: 26px;
    padding-top: 50px;
    width: 100%;
    margin-bottom: 35px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
    }
  }

  &__icon {
    height: 30px;
    margin: 0 15px 0 15px;
  }
}
</style>
