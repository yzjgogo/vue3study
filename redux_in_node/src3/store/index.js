const { createStore } = require("redux")

const initialState = {
  name: "why",
  counter: 100
}

function reducer(state = initialState, action) {
  if (action.type === "change_name") {
    return { ...state, name: action.name }
  } else if (action.type === "add_number") {
    return { ...state, counter: state.counter + action.num }
  }
  return state
}

const store = createStore(reducer)

module.exports = store

