export const state = () => ({
  user: {
    name: "",
    thumbnail: "",
    url: "",
  },
  isLogged: false,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setStatus(state) {
    state.isLogged = true
  },
}

export const getters = {
  userInfo(state) {
    return state
  },
}
