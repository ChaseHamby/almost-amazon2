import {bookStringBuilder} from './cart.js'
import {printToDom} from '../helpers/util.js'

const book = {
    title: "Falling Up",
    image: "https://images-na.ssl-images-amazon.com/images/I/81BM9BDGCUL.jpg",
    price: "14.99",
    description: "Cute book full of short stories and poems."
    };

const addCart = document.getElementById('addButton');

const cartStuff = () => {
 addCart.addEventListener('click', function (e) {
    bookStringBuilder();
    })
};

cartStuff();

export {book, cartStuff}
