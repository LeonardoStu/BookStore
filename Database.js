module.exports = class Database{
    #storage = {
        author: [],
        books: [],
        poster: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key]
    }

    saveAuthor(author){
        this.#storage.author.push(author)
    }

    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book){
        let bookExists = this.findBookByName(book.name)
        if(!bookExists){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }
    
    findPosterByName(posterName){
        return this.#storage.poster.find(p => p.name === posterName)
    }

    savePoster(poster){
        let posterExists = this.findPosterByName(poster.name)
        if(!posterExists){
            this.#storage.poster.push(poster)
        }
    }

    addPosterToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }
    
    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user){
        let userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists){
            this.#storage.users.push(user)
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.#storage.author)
        console.table(this.#storage.books)
        console.table(this.#storage.orders.map(order => order.data))
        console.table(this.#storage.poster)
        console.table(this.#storage.users)
    }
}