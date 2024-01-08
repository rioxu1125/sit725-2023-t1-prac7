//business logic in this 

const { ObjectId } = require('mongodb');

let collection = require('../models/cat');

const postCat = (req,res) => {
    let cat = req.body;
    collection.postCat(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}



//this function moved from server.js to here as a separate logic
const getAllCats = (req,res) => {
    collection.getAllCats((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

/*const deleteCat = (req,res) => {
    let cat = req.body;
    collection.deleteOne(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}*/



const deleteCat = (req, res) => {
    let catId = req.params.id;
    collection.deleteOne({_id: new ObjectId(catId)}, (err, result) => {
        if (!err) {
            res.json({statusCode: 200, message: 'Cat deleted successfully'});
        } else {
            console.error('Error deleting cat:', err); 
            res.json({statusCode: 500, message: 'Error deleting cat'}); 
        }
    });
};




module.exports = {postCat,getAllCats}