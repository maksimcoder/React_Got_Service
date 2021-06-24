export default class GotService {
    constructor() {
        this.__apiUrl = "https://www.anapioficeandfire.com/api";
    }

    async getResource(url) {
        const res = await fetch(`${this.__apiUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllBooks() {
        const books = await this.getResource(`/books/`);
        return books.map(this._transformBook);
    }
    
    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformChar);
    }
    
    async getCharacter (id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }
    
    async getAllHouses() {
        const houses = await this.getResource('/houses/')
        return houses.map(this._transformHouse);
    }
    
    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    _transformChar(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            tutles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }


}