const mongoose= require('mongoose');

const bookSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the book name"],
        unique:true,
    },
    author:{
        type:String,
        required:[true,"Please add the author name"],
        unique:true
    },
    category:{
        type:String,
        required:[true,"Please add the category name"],   
    },
    year:{
        type:Number,
        required:[true,"Please add the release year"],
    },
    available:{
        type:Boolean,
        default:true
    }
    
},{
    versionKey:false
})

module.exports= mongoose.model('books',bookSchema)