const dataProducts = require("../data/products");

const newId = new Date().getTime()

const list = (req,res) =>{
    res.json(dataProducts)
}

const show = (req,res) => {
    const id = req.params.id
    const foundProduct = dataProducts.find((product)=>{
        return product._id == id
    })
    res.json(foundProduct)
}

const create = (req,res) => {
    const id = req.body._id
    const name = req.body.name
    const description = req.body.description
    const rating = req.body.rating
    const imgUrl = req.body.imgUrl
    const price = req.body.price
    const category = req.body.category
    const review = req.body.reviews
console.log(req);
    dataProducts.push({
        '_id':  new Date().getTime(),
        name,
        description,
        rating,
        imgUrl,
        price,
        category,
        review
    })
    res.json(dataProducts)
}


module.exports = {
    list, show, create
}