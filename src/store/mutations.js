const increment = (state, newobj) => {
  let name,
    value;
  for (let key in newobj) {
    name = key;
    value = newobj[key]
  }

  let nametrue = state.messageObj.some((event, index)=>event.hasOwnProperty(name));

  if (!nametrue) {
    state.messageObj.push(newobj)
  } else {
    state.messageObj.forEach((event)=> {
      if (event.hasOwnProperty(name)) event[name] = value
    })
  }
}

const incrementerror = (state, newobj)=> {
  let name,
    value;
  for (let key in newobj) {
    name = key;
    value = newobj[key]
  }

  let nametrue = state.errorObj.some((event, index)=>event.hasOwnProperty(name));

  if (!nametrue) {
    state.errorObj.push(newobj)
  } else {
    state.errorObj.forEach((event)=> {
      if (event.hasOwnProperty(name)) event[name] = value
    })
  }
}

export default {
  increment,
  incrementerror
}
