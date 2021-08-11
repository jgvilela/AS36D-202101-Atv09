const axios = require('axios').default;

function postAllBooks() {
    return axios.post('http://localhost:3000/books', {
                    ID: 3,
                    name: 'My Boook',
                    author: 'Me and only me'
                })
                .then((res) => {
                    console.log(res.data);
                    return axios.post('http://localhost:3000/books', {
                                ID: 4,
                                name: 'The Lord of the Rings: The Fellowship of the Ring',
                                author: 'J. R. R. Tolkien'
                    })
                })
                .then((res) => {
                    console.log(res.data);
                    return axios.post('http://localhost:3000/books', {
                                ID: 3,
                                name: 'The Lord of the Rings: The Two Towers',
                                author: 'J. R. R. Tolkien'
                            })
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response.data);
                });
}

function getAllBooks() {
    return axios.get('http://localhost:3000/books')
                .then((response) => {
                    console.log(response.data);
                });
} 

postAllBooks();
getAllBooks();