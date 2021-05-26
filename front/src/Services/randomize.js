const randomize = (initial, end) => {
  return Math.floor(Math.random() * (end - initial) + initial);
}

export default randomize;