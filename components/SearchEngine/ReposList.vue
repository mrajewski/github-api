<template>
  <section class="repos">
    <repo-element :payload="payload" />
  </section>
</template>

<script>
import RepoElement from "~/components/SearchEngine/RepoElement"
export default {
  name: "ReposList",
  components: {
    RepoElement,
  },
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
