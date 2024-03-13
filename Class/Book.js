const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, synopsis, genge, pages, author, description, price, inStock = 0){
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genge = genge
        this.pages = pages
        this.author = author
    }
}