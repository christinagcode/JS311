const dataComments = require('../data/comments');

const list = (req,res) => {
    res.json(dataComments)
}

const show = (req,res) =>{
    const id = req.params.id
    const foundComments = dataComments.find((comment) => {
        return comment._id == id
    })
    res.json(foundComments)
}

// what am I doing wrong? for create???
const create = (req,res) =>{
    const id = req.body._id
    const body = req.body.body
    const postId = req.body.postId

    dataComments.push({
        '_id': id,
        body: body,
        postId: postId    
    })

    // "_id": 1,
    // "body": "ACA is great!",
    // "postId": 1

    res.json(dataContacts)
}





module.exports = {
    list, show, create
}