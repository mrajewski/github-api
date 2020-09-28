<template>
  <div class="repos__element">
    <div class="repos__name">
      {{ payload.name }}
    </div>
    <div class="repos__owner">
      {{ payload.owner.login }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ReposList",
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
