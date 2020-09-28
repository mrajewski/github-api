<template>
  <label>
    <slot />
    <input
      v-bind="$attrs"
      :value="value"
      :placeholder="placeholder"
      autocomplete="off"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "InputControl",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped lang="scss">
label {
  position: relative;
  width: 80%;

  @media (max-width: 850px) {
    width: 100%;
  }
}

input::-webkit-calendar-picker-indicator {
  display: none;
}

input {
  height: 60px;
  width: 100%;
  min-width: 300px;
  padding: 12px 24px;
  background-color: transparent;
  font-size: 18px;
  line-height: 18px;
  color: $mainColor;
  background-image: url("~assets/images/24px.svg");
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: 95% center;
  border-radius: 10px;
  border: 1px solid $mainColor;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  @media (max-width: 850px) {
    margin-bottom: 10px;
  }

  &::placeholder {
    color: $mainColor;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    padding: 12px 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }
}
</style>
