<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped lang="scss">
button:active,
button:focus {
  border: none;
  outline: none;
}
.button {
  display: flex;
  align-items: center;
  width: 230px;
  height: 50px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  background-color: $mainColor;
  cursor: pointer;
  font-size: 18px;
  color: $fontColor;
  transition: 0.1s;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  &.search-btn {
    background-color: transparent;
    color: $mainColor;
    justify-content: center;
    box-shadow: none;
    border: 1px solid $mainColor;
    height: 60px;
    border-radius: 10px;
    margin-left: 15px;
    transition: 0.2s;
    font-size: 18px;
    text-transform: uppercase;

    &:hover {
      color: $fontColor;
      background-color: $mainColor;
    }
  }
}
</style>
