let functionalHelpers = require('./functional');
let myfunctionalHelpers = require('./my_functional');

exports.once = functionalHelpers.once;
exports.onceAndAfter = functionalHelpers.onceAndAfter;
exports.addLogging = functionalHelpers.addLogging;

exports.alternator = myfunctionalHelpers.alternator;
exports.thatManyTimes = myfunctionalHelpers.thatManyTimes;

exports.curry = functionalHelpers.curry;
exports.compose = functionalHelpers.compose;
