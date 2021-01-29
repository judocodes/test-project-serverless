const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');

const region = process.env.REGION;
const userPoolId = process.env.USERPOOL_ID;
const iss = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;

module.exports.protectApi = protectApi;

async function protectApi(event, context) {
  var { keys } = await fetch(iss).then(r => r.json());
  var pem = jwkToPem(keys[0]);

  return event;
}
