const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
    /*
    TODO pull username and password off of body
    TODO hash the password using bcrypt
    TODO create a new user in database
    TODO respond with newly create user
    */
        //Below <- for checking user eventually?
        const db = req.app.get('db') 

        const {username, password} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.register_user([username, hash])
        //need to create req.session.user in a module somewhere
        req.session.user = newUser

        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        /*
        TODO Pull the username and password off of body
        TODO Compare the password with the hashed password from the DB
        TODO Pull the user with the matching username and password out of the DB
        TODO Respond with the user
        */

        const db = req.app.get('db')
        const {username, password} = req.body

        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)
        //existingUser is not defined

        if(!isAuthenticated) {
            return res.status(403).send('Incorrect username or password')
        }
        delete existingUser.hash

        //Puts user on session
        req.session.user = existingUser

        res.status(200).send(req.session.user)
    }

}