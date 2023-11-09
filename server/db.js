const {connect} = require("mongoose")

exports.connectDB = async () => {

    const URI = process.env.URI
    const con = await connect(URI)
    console.log(`Connected to db ${con.connection.host}`.blue.underline)
}

