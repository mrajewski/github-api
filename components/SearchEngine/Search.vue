<template>
  <div class="search">
    <div class="wrapper">
      <div class="search__input">
        <input-control
          v-model="inputValue"
          placeholder="Search for repositories"
        ></input-control>
      </div>

      <ApolloQuery
        :query="require('~/graphql/repos.gql')"
        :variables="{ value: inputValue }"
      >
        <template
          v-slot="{ result: { loading, error, data }, isLoading, query }"
        >
          <!-- Loading -->
          <div v-if="isLoading" class="search__loading">
            <Loader />
          </div>

          <!-- Error -->
          <div v-else-if="error" class="search__error">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="search__list">
            <div v-for="(repo, index) in data.search.edges" :key="repo.node.id">
              <repo-element :payload="repo.node" :index="index" />
            </div>
            <button
              v-if="data.search.edges.length > 0"
              class="search__button"
              @click="fetchMore(query, data.search.pageInfo.endCursor)"
            >
              Show More
            </button>
          </div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import InputControl from "~/components/UI/InputControl"
import RepoElement from "~/components/SearchEngine/RepoElement"
import Loader from "~/components/UI/Loader"

export default {
  name: "Search",
  components: {
    InputControl,
    RepoElement,
    Loader,
  },
  data() {
    return {
      after: "",
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.$store.state.inputValue
      },
      set(value) {
        return this.$store.commit("setValue", value)
      },
    },
  },
  methods: {
    fetchMore(query, endCursor) {
      query.fetchMore({
        variables: {
          after: endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          fetchMoreResult.search.edges = [
            ...prev.search.edges,
            ...fetchMoreResult.search.edges,
          ]
          return fetchMoreResult
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  min-height: calc(100vh - 100px);
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 25px -8px rgba(0, 0, 0, 0.75);

  &__input {
    //display: flex;
    width: 100%;
    margin: 0 auto 50px 0;
    padding: 50px 20px 0 20px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  &__button {
    margin: 20px auto;
    background-color: $mainColor;
    border: 1px solid $mainColor;
    border-radius: 10px;
    padding: 15px 0;
    font-size: 24px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s;
    width: 200px;
    color: $fontColor;
    box-shadow: 0 0 25px -8px rgba(0, 0, 0, 0.75);

    &:hover {
      background-color: transparent;
      color: $mainColor;
    }
  }
}
</style>
