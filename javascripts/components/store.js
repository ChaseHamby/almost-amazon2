import {bookStringBuilder} from '../components/cart.js'

const book = {
    title: "Falling Up",
    image: "https://images-na.ssl-images-amazon.com/images/I/81BM9BDGCUL.jpg",
    price: "$15.00",
    description: "Cute book full of short stories and poems."
    };

const addCart = document.getElementById('buyButton');

const addBook = () => {
    addCart.addEventListener('click', () => {
        bookStringBuilder();
    })
};

const attachEvents = () => {
    addBook();
}

export {book, attachEvents}
