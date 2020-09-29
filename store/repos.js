export const state = () => ({
  repos: [],
})

export const mutations = {
  setRepos(state, repos) {
    state.user = repos
  },
}
