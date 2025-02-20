'use strict';

var _createHash = require('create-hash');

var _createHash2 = _interopRequireDefault(_createHash);

var _createHmac = require('create-hmac');

var _createHmac2 = _interopRequireDefault(_createHmac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha1(data, encoding) {
    return (0, _createHash2.default)('sha1').update(data).digest(encoding);
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha256(data, encoding) {
    return (0, _createHash2.default)('sha256').update(data).digest(encoding);
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha512(data, encoding) {
    return (0, _createHash2.default)('sha512').update(data).digest(encoding);
}

function HmacSHA256(buffer, secret) {
    return (0, _createHmac2.default)('sha256', secret).update(buffer).digest();
}

function ripemd160(data) {
    const hash = require('sumi-hash')
    return Buffer.from(hash.rmd160(data.toString('utf8')), 'utf8')
}

// function hash160(buffer) {
//   return ripemd160(sha256(buffer))
// }
// 
// function hash256(buffer) {
//   return sha256(sha256(buffer))
// }

// 
// function HmacSHA512(buffer, secret) {
//   return crypto.createHmac('sha512', secret).update(buffer).digest()
// }

module.exports = {
    sha1: sha1,
    sha256: sha256,
    sha512: sha512,
    HmacSHA256: HmacSHA256,
    ripemd160: ripemd160
    // hash160: hash160,
    // hash256: hash256,
    // HmacSHA512: HmacSHA512
};