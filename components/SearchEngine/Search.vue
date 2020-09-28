<template>
  <div class="search">
    <div class="wrapper">
      <div class="search__input">
        <input-control
          v-model="value"
          placeholder="Search for repositories"
        ></input-control>
      </div>
    </div>
    <ApolloQuery :query="require('~/graphql/repos.gql')" :variables="{ value }">
      <template v-slot="{ result: { loading, error, data }, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div v-for="repo in data.search.edges" :key="repo.node.id">
            <repos-list :payload="repo.node" />
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import InputControl from "~/components/UI/InputControl"
import ReposList from "~/components/SearchEngine/ReposList"

export default {
  name: "Search",
  components: {
    InputControl,
    ReposList,
  },
  data() {
    return {
      value: "",
    }
  },
  methods: {
    log(log) {
      console.log(log)
    },
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
    //display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 50px 20px 0 20px;
  }
}
</style>
