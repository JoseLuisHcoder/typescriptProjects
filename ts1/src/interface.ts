interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string; 
}

const book : Book = {
    id: 1,
    title: 'My Title',
    author:'JLH'
}

const books: Book[] = []

function getBook():Book {
    return {
        id:1,
        title:"joseL",
        author: "JLH"
    }
} 

const myBook = getBook()