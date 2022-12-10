const dataContacts = require('../data/contacts');

const list = (req,res) =>{
    res.json(dataContacts)
}

const show = (req,res) =>{
    const id = req.params.id
    // for ever contact in our array of contacts we're going to find a single
    //contact that matches our id.
    const foundContact = dataContacts.find((contact)=>{
        return contact._id == id
    })
    res.json(foundContact)
}

const create = (req,res) =>{
    const id = req.body._id
    const name = req.body.name
    const occupation = req.body.occupation
    const avatar = req.body.avatar

    dataContacts.push({
        '_id': id,
        name: name,
        occupation: occupation,
        // example 
        avatar        
    })

    res.json(dataContacts)
    // "_id": 1,
    // "name": "Dale Cooper",
    // "occupation": "FBI Agent",
    // "avatar":
}





module.exports = {
    list, show, create
}