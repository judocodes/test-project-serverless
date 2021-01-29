require('../db/mongoose');
const Teacher = require('../schemas/Teacher');
const jsonify = require('../utils/jsonify');

module.exports.getUser = getUser;

// ***********

async function getUser(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('DEBUG', jsonify(event));

  try {
    var payload = await Teacher.findOne({ _id: '6010405a0d871b00086c2809' });
  } catch (e) {
    var payload = e;
  }
  return createResponse(payload);
}

function createResponse(payload) {
  return {
    statusCode: 200,
    body: JSON.stringify(payload),
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8000',
    },
  };
}
