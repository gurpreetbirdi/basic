export const handleInput = inputText => {
  return {
    type: "INPUT",
    inputText: inputText
  };
};

export const handleInputReducer = (state = { inputText: "naina" }, action) => {
  switch (action.type) {
    case "INPUT":
      return Object.assign({}, state, { inputText: action.inputText });
    default:
      return state;
  }
};
