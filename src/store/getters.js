const messageObjfiter = (state) => {
  return state.messageObj.map(one=>parseInt(one) + 1)
}

export default {
  messageObjfiter
}
