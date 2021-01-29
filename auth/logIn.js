module.exports.logIn = logIn;

// ***********

async function logIn(event, context) {
  console.log('DEBUG', { event });
  console.log('DEBUG', { context });
  event.request.userAttributes['custom:something'] = 'something';
  return event;
}
