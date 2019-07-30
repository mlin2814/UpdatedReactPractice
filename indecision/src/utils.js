console.log('utils.js is running');

//***** Another way of doing things
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;

//***** One way of doing things
const square = (x) => x * x;
const add = (a, b) => a + b;

export { add, square };
