require('../db/mongoose');
const Teacher = require('../schemas/Teacher');

module.exports.createUser = async function createUserAndStoreInDb(
  event = {},
  context = {}
) {
  console.log('DEBUG', { event });
  const newUser = extractUserData(event);
  context.callbackWaitsForEmptyEventLoop = true;

  try {
    const user = await Teacher.create(newUser);
    console.log('DEBUG User has been created.');
    console.log({ user });
    return event;
  } catch (e) {
    console.error(
      `An error occurred while inserting User ${event.userName}: ${e}`
    );
    return event;
  }
};

function extractUserData(event) {
  if (!event.request) return;

  try {
    var email = event.request.userAttributes.email;
    var cognitoId = event.request.userAttributes.sub;
    var fullName = event.request.clientMetadata.fullName;
    var address = event.request.clientMetadata.address;
  } catch (e) {
    console.error(e);
    return {};
  }

  return {
    email,
    cognitoId,
    fullName,
    address,
  };
}
