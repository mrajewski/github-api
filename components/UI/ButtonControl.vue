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
  margin-top: 20px;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  border: none;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
  color: $mainColor;
  transition: 0.1s;

  &:hover {
    box-shadow: 0px 0px 19px -5px rgba(0, 0, 0, 0.75);
  }
}
</style>
