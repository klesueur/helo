const bcrypt = require('bcryptjs')
const getAllPosts = async (db) => {
    const posts = await db.get_posts()
    return posts
}

module.exports = {

    register: async (req, res) => {
    /*
    TODO pull username and password off of body
    TODO hash the password using bcrypt
    TODO create a new user in database
    TODO respond with newly create user
    TODO -- ADD CHECK USERNAME
    */
        //Below <- for checking user eventually?
        const db = req.app.get('db') 

        const {username, password} = req.body

        // preventing duplicate usernames being registered
        const [user] = await db.check_user([username])
        if (user) {
            return res.status(409).send('User already exists. Please login using the correct username or register a new user.')
        }

        //or actually create/register the new user
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

        const [existingUser] = await db.check_user([username])
        
        if (!existingUser) {
            return res.status(404).send('User not found')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password)
        //existingUser is not defined

        if(!isAuthenticated) {
            return res.status(403).send('Incorrect username or password')
        }
        delete existingUser.hash

        //Puts user on session
        req.session.user = existingUser

        res.status(200).send(req.session.user)
    }, 

    getAllPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    },

    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.params

        const posts = await db.get_user_posts([userid])
        res.status(200).send(posts)
    },

    addPost: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.params
        const {title, img, content} = req.body
        await db.add_post([userid, title, img, content])
        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    },

    deletePost: async (req, res) => {
        const db = req.app.get('db')
        const {postid} = req.params
        await db.delete_post([postid])
        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    }, 

    editPost: async (req, res) => {
        const db = req.app.get('db')
        const {postid} = req.params
        const {content} = req.body
        await db.edit_post([content, postid])
        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    }

}