const once = fn => {
  let _done = false;
  return (...args) => {
    if(!_done) {
      _done = true;
      fn(...args);
    }
  }
};
