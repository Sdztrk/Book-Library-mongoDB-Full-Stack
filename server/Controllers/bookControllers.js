require("express-async-errors")
const Books = require("../modals/bookModal")

//getting the books
exports.getBooks = async(req,res) => {
    const data = await Books.find();
    res.status(200).json({
        success:true,
        data:data,
        count:data.length,
    })
};

// posting a book
exports.postBook = async(req,res) =>  {
    const data = await Books.create(req.body);
    res.status(201).json({
        success:true,
        data:data,
    })
}

//getting a single book
exports.getBook = async(req,res) => {
    const data = await Books.findById(req.params.id);
    res.status(200).json({
        success:true,
        data:data,
    })
}
//updating a book
exports.updateBook = async(req,res)=> {
    const data = await Books.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(202).json({
        success:true,
        data:data,
    })
}
//deleting a book
exports.deleteBook = async(req,res) => {
    await Books.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
    })
}