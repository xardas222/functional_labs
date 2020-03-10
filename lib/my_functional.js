const alternator = (f, g, bool = false) => {
  let result;
  return (...args) => {
    if(!bool) {
      bool = true;
      result = f(...args);
    } else {
      bool = false;
      result = g(...args)
    }
    return result;
  }
};

const thatManyTimes = (x) => {
  let count = x;
  return(fn = () => {}) => {
    if(count > 0) {
      fn();
      count--;
    }
  }
};


module.exports = {
  alternator: alternator,
  thatManyTimes: thatManyTimes
}
