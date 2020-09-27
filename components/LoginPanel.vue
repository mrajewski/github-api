<template>
  <section class="login">
    <form class="login__form">
      <h1 class="login__title">Login to</h1>
      <img class="login__logo" src="~/assets/images/git.png" />
      <div class="login__inputs">
        <input-control type="text" placeholder="Email" />
        <input-control type="password" placeholder="Password" />
      </div>

      <button-control> Login </button-control>
    </form>
  </section>
</template>

<script>
import InputControl from "~/components/UI/InputControl"
import ButtonControl from "~/components/UI/ButtonControl"

export default {
  name: "LoginPanel",
  components: {
    InputControl,
    ButtonControl,
  },
}
</script>

<style lang="scss" scoped>
.login {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    height: 550px;
    width: 350px;
    border-radius: 15px;
    background-color: $fontColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.75);
  }

  &__logo {
    width: 100px;
    margin-bottom: 80px;
  }

  &__inputs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__title {
    font-size: 35px;
    padding-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
