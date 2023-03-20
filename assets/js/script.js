// seleziono gli elementi nella DOM
const gioca_btn = document.getElementById('gioca');
const resetta_btn = document.getElementById('resetta');
const level_select = document.getElementById('level');
const contain = document.querySelector(".contain");


// creo una variabile per il max numero di celle

let nMax;

// creo un ciclo n volte per le celle

for (let i = 0; i < nMax; i++) {
  const cell = `<div class="cell"></div>`;
  contain.innerHTML += cell;
}

// seleziono una cella che ha classe cell e active

const cellEl = document.querySelectorAll(".cell")

// aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl


for (let i = 0; i < cellEl.length; i++) {
  const thisCell = cellEl[i];
  console.log(thisCell)
  thisCell.addEventListener("click", function () {
    thisCell.classList.toggle("bg_green")
    // this.classList.add("active")
    console.log("Changed the color")
  })
}

