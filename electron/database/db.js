
const { Sequelize } = require('sequelize');

let sequelize;
let instance = {}
//console.log(global.share.app.getPath('userData'));
module.exports =  async function ()  {
    var path = require('path');
    sequelize = new Sequelize({
        dialect: 'sqlite',
        logging : false,
        storage: path.join(global.share.app.getPath('userData'),'/database.sqlite'), 
        logging: false,  
    });

    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }
      
    let db = {}
    db.User = require('./models/User')(sequelize,Sequelize)
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    instance = db;
    return db;
}


module.exports.runSeeders = async function ()
{
    if(instance != undefined)
    {
        const Encrypt = require('../systems/Encryption')
        let usercount = 0;
        usercount = await instance.User.count();
        if(usercount == 0)
        {
            const password = await Encrypt.hashPassword('123456');
            instance.User.create({
                name : 'Super Admin',
                username : 'superadmin',
                password : password,
                user_type : 1
            })
        }
        return true;
    }
    return false;
}
  

module.exports.getDB = function ()
{
    return instance;
}