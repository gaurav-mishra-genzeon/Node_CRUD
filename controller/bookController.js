const bookModel = require("../models/bookModel");

//1. GET ALL BOOKS
const getBook = async (req, res) => {
  try {
    const book = await bookModel.find();
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};

//2. GET BOOK BY ID
const getBookById = async (req, res) => {
  let id = req.params.id;
  const book = await bookModel.findById(id);
  try {
      res.status(200).send(book);

  } catch (err) {
   console.log(err);
  }
};

//3. GET BOOK BY Author/Category
const getBookByQuery = async(req, res) => {
  let query = req.params.query;
  // console.log(query)
  try {
    const book = await bookModel.find(
      { "$or":[
         {"author":{$regex:req.params.query}},
         {"category":{$regex:query}}
       ]
   });
      res.status(200).send(book);
  } catch (err) {
   console.log(err);
  }
};


//ADD BOOK TO DIRECTORY
const addBook = async (req, res) => {
  // console.log("req body is:", req.body);
  const { name, author, year, category, available } = req.body;
  // if (!name || !author || !year || !category) {
  //   throw new Error("Fields cant be empty");
  // } else {
    try {
      const book = await bookModel.create({
        name,
        author,
        year,
        category,
        available,
      });
      res.status(200).send(book);
    } 
    catch (err) {
      console.log(err);
      res.status(400).send("something went wrong")
    }
  // }
};


// UPDATE A BOOK
const updateBook = async (req, res) => {
  let id = req.params.id;
  try{  
    const updatedbook = await bookModel.findByIdAndUpdate({_id:id},req.body);
     res.status(200).send(updatedbook);
  }
  catch(err){
    res.status(400)
    console.log(err)
  }
};

//DELETE A BOOK
const deleteBook = async(req, res) => {
  let id = req.params.id;
  try{
    const deletedbook = await bookModel.findByIdAndDelete({_id:id});
     res.status(200).send(deletedbook);
  }catch(err){
        console.log(err)
  }
  
};

module.exports = { getBook, getBookById,getBookByQuery, addBook, updateBook, deleteBook };
