<template>
  <div class="info">
    <ApolloQuery
      :query="require('~/graphql/repoDetails.gql')"
      :variables="{
        name: $route.params.name,
        owner: $route.params.owner,
      }"
    >
      <template v-slot="{ result: { loading, error, data }, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="info_loading">
          <Loader />
        </div>

        <!-- Error -->
        <div v-else-if="error" class="info__error">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="ingo__page">
          <div class="info__header">
            <img
              class="info__icon"
              src="~/assets/images/repo-icon.png"
              alt="repo"
            />
            <div class="info__owner">
              <img
                class="info__avatar"
                :src="data.repository.owner.avatarUrl"
                alt="avatar"
              />
              {{ $route.params.owner }}
            </div>
            /
            <div class="info__name">
              {{ $route.params.name }}
            </div>
          </div>

          <div class="info__description">
            <div class="info__description-header">Description:</div>
            {{ data.repository.description }}
          </div>

          <div class="info__body">
            <div class="info__table-header">Last commits (max 10)</div>
            <div v-if="data.repository.ref">
              <div
                v-for="(commit, index) in lastCommits(
                  data.repository.ref.target.history.edges
                )"
                :key="commit.cursor"
                class="info__commit-wrap"
              >
                <div class="info__commit" @click="pickCommit(index)">
                  Commit made by:
                  <strong>{{ commit.node.author.name }}</strong>
                </div>

                <div v-if="pickedCommit === index" class="commit">
                  <div class="commit__about">
                    <img
                      class="commit__icon"
                      :src="commit.node.author.avatarUrl"
                      alt="author_avatar"
                    />
                    <div class="commit__author">
                      <a :href="commit.node.author.user.url" target="_blank">
                        {{ commit.node.author.name }}
                      </a>
                    </div>
                  </div>
                  <div class="commit__msg">
                    {{ commit.node.message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Loader from "~/components/UI/Loader"
export default {
  name: "RepoPage",
  components: {
    Loader,
  },
  data() {
    return {
      pickedCommit: null,
    }
  },
  methods: {
    lastCommits(commits) {
      return commits.slice(-20).reverse()
    },
    pickCommit(index) {
      console.log(index)
      return index === this.pickedCommit
        ? (this.pickedCommit = null)
        : (this.pickedCommit = index)
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  min-height: calc(100vh - 100px);
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 25px -8px rgba(0, 0, 0, 0.75);
  padding: 30px 100px;

  &__header {
    padding-top: 30px;
    display: flex;
    font-size: 26px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    height: 40px;
  }

  &__owner {
    margin: 0 5px 0 15px;
    display: flex;
    align-items: center;
  }

  &__name {
    margin-left: 5px;
  }

  &__avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }

  &__description {
    text-align: center;
    max-width: 800px;
    margin: 25px auto;

    &-header {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  &__body {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid $mainColor;
    border-radius: 10px;
  }

  &__table-header {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid $mainColor;
    background-color: $mainColor;
    color: $fontColor;
    border-radius: 8px 8px 0 0;
  }

  &__commit {
    display: flex;
    align-items: center;
    height: 30px;
    border-bottom: 1px solid $mainColor;
    cursor: pointer;
    transition: 0.2s;
    padding-left: 20px;

    strong {
      margin-left: 10px;
    }

    &:hover {
      background-color: $secondColor;
    }
  }

  &__commit-wrap:last-of-type .info__commit,
  &__commit-wrap:last-of-type .commit {
    border: none;
    border-radius: 0 0 10px 10px;
  }
}

.commit {
  display: flex;
  padding: 15px 30px;
  border-bottom: 1px solid $mainColor;
  flex-direction: column;

  a {
    color: #000;
  }

  &__about {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &__icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }

  &__author {
    font-weight: 600;
    margin-left: 10px;
    font-size: 18px;
  }

  &__msg {
    background-color: #eee;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
}
</style>
