const Author = require("./Class/Author")
const Book = require("./Class/Book")
const Order = require("./Class/Order")
const Poster = require("./Class/Poster")
const User = require("./Class/User")
const Database = require("./Database")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUser(){
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor(){
        return App.#database.find('author')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks() {
        return App.#database.find('books')
    }
    
    createPoster(name, description, height, width, price, inStock){
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity){
        App.#database.addPosterToStock(posterName, quantity)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
          if (product instanceof Book) {
            App.#database.removeBooksFromStock(product.name, quantity)
          } else if (product instanceof Poster) {
            App.#database.removePosterFromStock(product.name, quantity)
          }
        })
      }
    
      getOrders() {
        return App.#database.find('orders')
      }
    
      showDatabase() {
        App.#database.showStorage()
      }
}