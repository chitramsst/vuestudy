
const db = require('../db').getDB()
const User = db.User;
const Encrypt = require('../../systems/Encryption')
const store = require('../../systems/DataStore');

exports.login_user = async (data) => {
    let user = await User.findOne({
        where: {
            username: data.username,
        }
    })
    if(user == null)
    {
        return {
            success : false
        }
    }
    const password = await Encrypt.verifyPassword(data.password,user.dataValues.password);
    if(password == false)
    {
        return {
            success : false
        }
    }
    store.set('currentUser',user.dataValues)
    return  {
        user : user.dataValues,
        success : true
    }
}