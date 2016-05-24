exports.changeArgumentType = (key, type) => ({
  type: 'CHANGE_ARGUMENT_TYPE',
  argType: type,
  key,
})

exports.addArgument = () => ({
  type: 'ADD_ARGUMENT'
})

exports.removeArgument = (key) => ({
  type: 'REMOVE_ARGUMENT',
  key
})
