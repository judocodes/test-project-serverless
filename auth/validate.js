const validator = require('validator');

module.exports.validateSignUp = async function validateSignUp(event, context) {
  console.log('DEBUG', 'validateSignUp has been invoked.');
  console.log({ context });
  console.log({ event });

  if (validateUserData(event.request)) {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
    console.log('DEBUG', 'User has been validated!');
  }

  return event;
};

function validateUserData(request = {}) {
  var { email } = request.userAttributes || {};
  var { fullName, address } = request.clientMetadata || {};
  return !!(fullName && address && email && validator.isEmail(email));
}
