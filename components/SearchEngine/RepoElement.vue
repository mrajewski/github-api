<template>
  <nuxt-link :to="`/${payload.owner.login}/${payload.name}`" class="repo">
    <img class="repo__avatar" :src="payload.owner.avatarUrl" alt="avatar" />
    <div class="repo__content">
      <div class="repo__name">
        <img
          class="repo__icon"
          src="~/assets/images/repo-icon.png"
          alt="repo"
        />
        {{ payload.name }}
      </div>
      <div class="repo__owner">
        {{ payload.owner.login }}
      </div>
      <div class="repo__description">
        {{ payload.description }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "RepoElement",
  props: {
    payload: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.repo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid $mainColor;
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: 0 0 15px -8px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  color: #000;
  text-decoration: none;
  background-color: $secondColor;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 22px -8px rgba(0, 0, 0, 0.75);
  }

  &__avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  &__content {
    margin-left: 20px;
  }

  &__icon {
    height: 24px;
    margin-right: 10px;
    margin-top: 4px;
  }

  &__name {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 22px;
  }

  &__owner {
    margin: 5px 0;
  }

  &__description {
    color: #999;
  }
}
</style>
