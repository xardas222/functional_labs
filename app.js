const F = require("./lib");

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const shout = F.compose(exclaim, toUpperCase);

console.log(shout('send in the clowns'));
