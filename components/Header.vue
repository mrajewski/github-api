<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <nuxt-link to="/">
        <div class="header__logo-wrapper" @click="clearInput">
          <img
            class="header__logo"
            src="~/assets/images/mark-light.png"
            alt="logo"
          />
          <span>Seeker</span>
        </div>
      </nuxt-link>
      <div v-if="userInfo.isLogged" class="header__user">
        <img
          :src="userInfo.user.thumbnail"
          alt="avatar"
          class="header__avatar"
        />
        <div class="header__username">
          {{ userInfo.user.name }}
        </div>
        <a class="header__profile" :href="userInfo.user.url" target="_blank">
          Profile</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    userInfo() {
      return this.$store.state.user
    },
  },
  methods: {
    clearInput() {
      return this.$store.commit("setValue", "")
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
}

.header {
  height: 80px;
  max-width: 100%;
  color: #fff;
  background-color: $mainColor;
  border-radius: 0 0 10px 10px;
  margin: 0 10px;

  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 20px;
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

  &__user {
    display: flex;
    align-items: center;
  }

  &__avatar {
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__username {
    font-size: 14px;
    margin-right: 15px;
  }

  &__profile {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $fontColor;
    color: $mainColor;
    width: 60px;
    height: 25px;
    font-size: 14px;
    border-radius: 15px;
  }
}
</style>
