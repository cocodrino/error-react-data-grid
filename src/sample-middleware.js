// EXAMPLE OF MIDDLEWARE IN CASE OF REQUIRED
const util = require('util');

export const sampleMiddleware = store => next => action => {
  next(action);
  console.log('sample of Middleware');
  console.info('ACTION> ', util.inspect(action));
  console.info('STATE> ', util.inspect(store));
};
