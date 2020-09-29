export const state = () => ({
  inputValue: "",
})

export const mutations = {
  setValue(state, value) {
    state.inputValue = value
  },
}
