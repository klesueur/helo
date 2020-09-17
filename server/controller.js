const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
    /*
    TODO pull username and password off of body
    TODO hash the password using bcrypt
    TODO create a new user in database
    TODO respond with newly create user
    */

        // const db = req.app.get('db')
        const {username, password} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.register_user([username, password])
        //Should I create register_user.sql in my DB?
        req.session.user = newUser

        res.status(200).send(req.session.user)
    },

}