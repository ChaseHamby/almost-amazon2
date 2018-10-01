import {book} from './store.js'
import {printToDom} from '../helpers/util.js'

const bookStringBuilder = () => {
    let newString = '';
    for(let i=0; i<book.length;i++){
    newString+= `<div class="col-1 offset-md-9">`;
    newString+= `<div class="col offset-md-9 imgContainer">`
    newString+= `<img class="col" src="https://images-na.ssl-images-amazon.com/images/I/81BM9BDGCUL.jpg" alt="">`;
    newString+= `<p class="price d-flex justify-content-center" id="price">$${book[0].price}</p>`;
    newString+= `</div>`
    newString+= `<img class="cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvtaXUycVf9ZRlWRcL5hLJXKCI43Eb3lbjuOct2uCtw1X055V"></img>`;
    newString+= `</div>`;
    }
    printToDom(newString, 'cart');
};

export {bookStringBuilder}