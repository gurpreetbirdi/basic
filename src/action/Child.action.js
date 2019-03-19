
export const child = (inputText) => {
  return{
    type: "INPUT",
    inputText: inputText
  }
}
export const childReducer = (state = {inputText: []}, action)=> {
  switch (action.type) {
    case "INPUT":
      return Object.assign({}, state, {inputText: action.inputText})
    default:
      return state;
  }
}