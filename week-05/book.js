import Author from "./author.js"
export default class Book extends Author{
    constructor(firstName, lastName, country)
    {
        super(firstName, lastName, country)
    }

    toDOM(){
        return `<div>
        <h1>Dog Man: Mothering Heights</h1>
        <p>${this.toHTML()}</p>
        <h2>published 2021</h2>
    </div>`
        
    }
}


