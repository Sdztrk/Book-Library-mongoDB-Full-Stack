 const {Schema, model} = require("mongoose")

 const bookSchema = new Schema(
    {
        title:{
            type:String,
            required:[true, "Book name is required"],
            minLength:[3, "Title name must be more then 3 charachters"],
            trim:true,
        },
        author:{
            type:String,
            required:[true, "Author name is required"],
            trim:true,
        },
        ISBN: {
            type:Number,
            required:[true,"There must be a ISBN Number"],
            trim:true,
        },
        genre:{
            type:String,
            required:[true,"There must be a genre name"],
            trim:true,
        },
        pubYear:{
            type:Number,
            required:[true,"There must be a publication year"],
            trim:true,
        }
    },
    {
        timestamps:true,
    }
 )

 module.exports = model("Book", bookSchema)