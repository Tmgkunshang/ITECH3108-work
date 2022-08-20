export default class Author{
    constructor(firstName, lastName, country){
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
    }
    toHTML(){
        return `<div>${this.firstName} ${this.lastName} ${this.country}</div>`
    }
}
