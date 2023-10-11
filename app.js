
// let payButton = document.querySelector('#payButton').addEventListener('click',(e)=>e.preventDefault());
let payForm = document.getElementById('payForm')

payForm.addEventListener('submit', (e)=>{

    /* Expresiones Regulares */
    let regexPass = /^[A-Za-z]{6,20}$/

    /* let isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let onlyGmail = /^[a-zA-Z0-9._-]+@gmail.com$/
    let onlyHotmail = /^[a-zA-Z0-9._-]+@hotmail.com$/

    let isACreditCard = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/*/

    e.preventDefault()        
    let feedbackMessage = document.getElementsByClassName('alert')
    
    let {names, lastNames , cardNumber, amount, selectCity , selectComuna , postalCode } = e.target

    if(names.value === '' && lastNames.value === '' && cardNumber.value === '' && cvv.value === '' && amount.value === '' && selectCity.value === '' && selectComuna.value === '' && postalCode.value === ''){

        names.classList.add('is-invalid')
        lastNames.classList.add('is-invalid')
        cardNumber.classList.add('is-invalid')
        cvv.classList.add('is-invalid')
        cvv.classList.add('is-invalid')
        amount.classList.add('is-invalid')
        selectCity.classList.add('is-invalid')
        selectComuna.classList.add('is-invalid')
        postalCode.classList.add('is-invalid')
        console.log(feedbackMessage);
        feedbackMessage[0].classList.add('alert-danger')

    }

    /* hacer una condicion que  */

    
    console.log(e.target.classList);




       
})




// aca voy a obtener todo los campos de formulario
// https://www.html5pattern.com/ aca puedo obtener tipod de validadores para inputs

/* let inputNames = document.getElementById('names');
let inputLastNames = document.getElementById('lastNames');
let inputCardNumber = document.getElementById('cardNumber');
let inputSecretNumber = document.getElementById('');
let inputAmount = document.getElementById('');
let selectCity = document.getElementById('');
let selectComuna = document.getElementById('');
let selectPostalCode = document.getElementById('');
let selectComment = document.getElementById('');

console.log(typeof(inputNames.value));
console.log(typeof(inputLastNames.value));
console.log(typeof(inputCardNumber.value)); */



/* payButton.addEventListener('click',(e)=>{
    e.preventDefault()
})
 */




