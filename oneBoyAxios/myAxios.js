
const pPost = require('./post');
const gGet = require('./get')

module.exports = {
    ...gGet,
    ...pPost
}