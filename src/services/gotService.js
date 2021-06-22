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

    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    getAllCharacters() {
        return this.getResource(`/characters?page=5&pageSize=10`);
    }
    
    getCharacter (id) {
        return this.getResource(`/characters/${id}`);
    }
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

}