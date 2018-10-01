import {book} from "../components/store.js";

const printToDom = (stringToPrint, divId) => {
    const printHere = document.getElementById(divId);
    printHere.innerHTML = stringToPrint;
};