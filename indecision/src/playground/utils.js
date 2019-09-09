console.log('utils.js is running');

//***** Another way of doing things
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;

//***** One way of doing things
const square = (x) => x * x;
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export { add, square, subtract as default };

// When dealing with defaults, the format for exports can be done like this
export default subtract;
// OR!
export default (a, b) => a - b;
// wild
