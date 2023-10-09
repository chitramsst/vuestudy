const bcrypt = require('bcrypt');

const saltRounds = 10
module.exports = {
    hashPassword: (password) => {
        let passwordHash = bcrypt.hash(password, saltRounds)
        return passwordHash
    },

    verifyPassword: (password, passwordHash) => {
        return bcrypt.compareSync(password, passwordHash)
    },

}