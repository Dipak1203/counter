
const charVal = document.getElementById('textarea');
let totalCount = document.getElementById('total-counter');
let remainingCount = document.getElementById('remain-counter')

let userChar = 0;
const updateCounter = () =>{
    // alert("Click")
    userChar = charVal.value.length;
    totalCount.innerHTML = userChar;

    remainingCount.innerHTML = 150 - userChar;
}

charVal.addEventListener('keyup',() => updateCounter());

const copyText = () =>{
    charVal.select();
    charVal.setSelectionRange(0,9999); // Mobile
    navigator.clipboard.writeText(charVal.value);
}