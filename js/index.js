/* 

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/

// variabili necessarie

const ageInputBox = document.getElementById("form-age"),
  ageInput = document.querySelector('input[name="age"]'),
  nextBtn = document.getElementById("nextBtn"),
  kmInputBox = document.getElementById("form-km"),
  kmInput = document.querySelector('input[name="km"]'),
  calcBtn = document.getElementById("calcBtn"),
  title = document.querySelector("h1"),
  dataToDislay = document.getElementById("data");

let age = 0;
let km = 0;

// variabili operative
const kmPrice = 0.21,
  overDiscount = 0.4,
  underDiscount = 0.2,
  randomLetter = ["z", "b", "f", "d", "j", "k"];
const randomTicketNumber =
  randomLetter[Math.floor(Math.random() * 5)] +
  randomLetter[Math.floor(Math.random() * 5)] +
  Math.floor(Math.random() * 10 + 1) +
  Math.floor(Math.random() * 10 + 1) +
  Math.floor(Math.random() * 10 + 1) +
  Math.floor(Math.random() * 10 + 1) +
  randomLetter[Math.floor(Math.random() * 5)] +
  randomLetter[Math.floor(Math.random() * 5)];
let finalPrice = 0;
// calcoliamo il prezzo base senza sconti
let price = 0;

/* controllo dell'input change così da abilitare un button per proseguire */

ageInput.addEventListener("input", () => {
  if (!isNaN(ageInput.value) && (ageInput.value >= 12 && ageInput.value < 130)) {
    if (ageInput && ageInput.value) {
      nextBtn.disabled = false;
      nextBtn.classList.add("shadow");
      nextBtn.classList.add("btn-animation");
    } else {
      nextBtn.disabled = true;
      nextBtn.classList.remove("btn-animation");
    }
  }else {
    nextBtn.disabled = true;
    nextBtn.classList.remove("btn-animation");
  }
  
});
nextBtn.addEventListener("click", () => {
  age = parseInt(ageInput.value);
  console.log(age);
  ageInputBox.classList.toggle("d-none");
  kmInputBox.classList.toggle("d-none");
});

kmInput.addEventListener("input", () => {
  if (!isNaN(kmInput.value) && (kmInput.value > 0 && kmInput.value < 2500)) {
    if (kmInput && kmInput.value) {
      calcBtn.disabled = false;
      calcBtn.classList.add("shadow");
      calcBtn.classList.remove("btn-light");
      calcBtn.classList.add("btn-success");
      calcBtn.classList.add("btn-animation");
      calcBtn.classList.add("btn-see");
    } else {
      calcBtn.disabled = true;
      calcBtn.classList.add("btn-light");
      calcBtn.classList.remove("btn-success");
      calcBtn.classList.remove("btn-animation");
      calcBtn.classList.remove("btn-see");
    }
  }else {
    calcBtn.disabled = true;
    calcBtn.classList.add("btn-light");
    calcBtn.classList.remove("btn-success");
    calcBtn.classList.remove("btn-animation");
    calcBtn.classList.remove("btn-see");
  }
  
});

calcBtn.addEventListener("click", () => {
  km = parseInt(kmInput.value);
  dataToDislay.innerHTML = `
<ul class='list-unstyled d-flex justify-content-between align-items-center text-start'>
    <li>
    <div class='fw-bold'>AGE</div>
    <div>${age}</div>
    </li>
    <li>
    <div class='fw-bold'>KM</div>
    <div>${km}</div>
    </li>
</ul>
`;

price = (km * kmPrice).toFixed(2);
document.getElementById('ticketNumber').innerText = randomTicketNumber;
// controls IF ELSE
if (age > 18 && age < 65) {
  // case no discount 
  document.getElementById("cost").innerHTML = `
              <p class="p-3 m-0 text-white fw-bold">  
              €${price}
              </p>
      `;
} else if (age <= 18) {
  // case under 18
  finalPrice = (price - price * underDiscount).toFixed(2);
  document.getElementById("cost").innerHTML = `
  <p class="p-3 m-0 text-white fw-bold">  
  €${finalPrice}
  </p>
  `;
} else {
  // case over 65
  finalPrice = (price - price * overDiscount).toFixed(2);
  document.getElementById("cost").innerHTML = `
  <p class="p-3 m-0 text-white fw-bold"> 
  €${finalPrice}
  </p>
  `;
}
  document.getElementById('reset').classList.toggle('d-none');
  document.querySelector('.bite.bite-right').classList.toggle('d-none');
  document.querySelector('.bite.bite-left').classList.toggle('d-none');
  document.querySelector('.line').classList.toggle('d-none');
  kmInputBox.classList.toggle("d-none");
  dataToDislay.classList.toggle("d-none");
  title.classList.toggle("opacity-0");
});

/*  RESET BUTTON and reset everything */

document.getElementById('reset').addEventListener('click', () => {
  /* reset input value */
  ageInput.value = '';
  kmInput.value = '';

  /* reset the buttons style */
  nextBtn.disabled = true;
  nextBtn.classList.remove("shadow");
  nextBtn.classList.remove("btn-animation");
  calcBtn.disabled = true;
  calcBtn.classList.remove("shadow");
  calcBtn.classList.add("btn-light");
  calcBtn.classList.remove("btn-success");
  calcBtn.classList.remove("btn-animation");
  calcBtn.classList.remove("btn-see");

  /* reset the ticket style on border */
  document.querySelector('.bite.bite-right').classList.toggle('d-none');
  document.querySelector('.bite.bite-left').classList.toggle('d-none');
  document.querySelector('.line').classList.toggle('d-none');

  /* hide all except the first input box with the age request */
  kmInputBox.classList.add("d-none");
  dataToDislay.classList.add("d-none");
  title.classList.add("opacity-0");
  ageInputBox.classList.toggle('d-none');

  /* reset all the text box */
  document.getElementById('ticketNumber').innerText = '';
  dataToDislay.innerHTML = '';
  document.getElementById("cost").innerHTML = '';
  document.getElementById('reset').classList.toggle('d-none');
  
});




