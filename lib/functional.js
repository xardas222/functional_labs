const once = fn => {
  let _done = false;
  return (...args) => {
    if(!_done) {
      _done = true;
      fn(...args);
    }
  }
};

const onceAndAfter = (f, g = () => {}) => {
  let _done = false;
  return (...args) => {
    if (!_done) {
      _done = true;
      f(...args);
    } else {
      g(...args);
    }
  }
};

const addLogging = (fn , logger = console.log) => (...args) => {
  logger(`entering ${fn.name}: ${args}`);
  try {
    const valueToReturn = fn(...args);
    logger(`exiting ${fn.name}: ${valueToReturn}`);
  } catch (thrownError) {
    logger(`exiting ${fn.name}: threw ${thrownError}`);
    throw thrownError;
  }
}

const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if(args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

const compose = (...fns) => (...args) => {
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
}

module.exports = {
  addLogging: addLogging,
  once: once,
  onceAndAfter: onceAndAfter,
  curry: curry,
  compose: compose
}
