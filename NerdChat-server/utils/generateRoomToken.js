const Crypto = require('crypto')


function generateRoomToken(size = 16) {  
  return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}

module.exports={
  generateRoomToken
};