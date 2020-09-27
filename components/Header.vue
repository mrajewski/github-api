<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <nuxt-link to="/">
        <div class="header__logo-wrapper">
          <img
            class="header__logo"
            src="~/assets/images/mark-light.png"
            alt="logo"
          />
          <span>Seeker</span>
        </div>
      </nuxt-link>
      <div v-if="loggedIn" class="header__user">
        <div>{{ username }}</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false,
      username: "mrajewski",
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  max-width: 100%;
  color: #fff;
  background-color: $mainColor;

  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;

    span {
      height: 40px;
      font-size: 22px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-left: 15px;
    }
  }

  &__logo {
    height: 40px;
  }
}
</style>
