

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await
    },

}