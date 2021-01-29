module.exports.testLambda = testLambda;

async function testLambda(event, context) {
  console.log('I am protected.');
  console.log('DEBUG', jsonify(event));
  console.log('DEBUG', jsonify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'NICE WORKS' }),
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8000',
    },
  };
}

function jsonify(doc) {
  return JSON.stringify(doc, null, 4);
}
