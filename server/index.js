require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const controller = require('./controller')



const app = express()
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { massAge: 1000 * 60 * 60 * 24 * 365 },
}))


//endpoints below
app.post('/auth/register', controller.register)



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB is connected for this Sim!")
    app.listen(SERVER_PORT, () =>
    console.log(`Listening on port ${SERVER_PORT}!!!`)
    )
})
