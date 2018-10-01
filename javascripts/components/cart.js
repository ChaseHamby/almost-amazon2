import {book} from '../components/store.js'
import {printToDom} from '../helpers/util.js'

const bookStringBuilder = () => {
    let newString = '';
    for (let i=0; i<book.length; i++) {
    newString += `<div class="card w-25 p-4 m-4">`;
    newString +=    `<img src="${book.image}"></img>`;
    newString +=    `<h4>${book.title}</h4>`;
    newString +=    `<p>${book.description}</p>`;
    newString +=    `<p>${book.price}</p>`
    newString += `</div>`;
    }
    printToDom(newString, 'card');
};

export {bookStringBuilder}