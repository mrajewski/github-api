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
input,
input:focus,
input:active {
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid $mainColor;
}

input {
  height: 50px;
  width: 200px;
  margin-bottom: 20px;
  padding: 0 5px;
  color: $mainColor;
  font-size: 18px;
}

input::placeholder {
  color: $mainColor;
  font-size: 18px;
}
</style>
