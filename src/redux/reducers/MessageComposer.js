const initialState = {
  last_key: 0,
  args: [
    {
      key: 0,
      value: '',
      type: 'string'
    }
  ]
}
const argumentTypes = ["string", "callback", "json"]
export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ARGUMENT":
      const key = state.last_key + 1;
      state.args.push({
        key,
        value: '',
        type: 'string'
      })
      return {
        ...state,
        last_key: key,
        args: [
          ...state.args
        ]
      }
    case "REMOVE_ARGUMENT":
      return {
        ...state,
        args: state.args.filter((a) => a.key != action.key )
      }
    case "CHANGE_ARGUMENT_TYPE":
      const arg = findArgByKey(action.key, state.args)
      if (!arg) {
        return state
      }
      const { argType } = action;
      let index = argumentTypes.indexOf(argType);
      index = index === -1 || index + 1 >= argumentTypes.length ? 0 : index + 1;
      arg.type = argumentTypes[index]
      return {
        ...state,
        args: [
          ...state.args
        ]
      }
    default:
      return state
  }
  
}


function findArgByKey(key, arr) {
  for( let i in arr){
    if (arr[i].key == key) return arr[i]
  }
}
