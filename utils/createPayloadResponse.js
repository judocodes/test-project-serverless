module.exports.createPayloadResonse = payload => ({
  statusCode: 200,
  body: JSON.stringify(payload),
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8000',
  },
});
