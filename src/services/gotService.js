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

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }    
    
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformChar = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died), 
            culture: this.isSet(char.culture)
        };
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
        };
    }
    
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        };
    }


}