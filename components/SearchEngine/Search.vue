<template>
  <form class="search">
    <div class="wrapper">
      <form class="search__input">
        <input-control placeholder="Search for repositories"></input-control>
        <button-control class="search-btn"> Search </button-control>
      </form>
    </div>
  </form>
</template>

<script>
import InputControl from "~/components/UI/InputControl"
import ButtonControl from "~/components/UI/ButtonControl"
export default {
  name: "Search",
  components: {
    InputControl,
    ButtonControl,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.search {
  height: calc(100vh - 100px);
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 25px -8px rgba(0, 0, 0, 0.75);

  &__input {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 50px 20px 0 20px;
  }
}
</style>
