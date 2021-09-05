import { ispisMesec } from "./service.js";

const ukupnoPrihod = document.querySelector(".ukupnoP");
const ukupnoRashod = document.querySelector(".ukupnoR");
const ukupnoNovac = document.querySelector("#novac");

const forma = document.querySelector(".forma");
const inputIznos = document.querySelector("#iznos");
const select = document.querySelector("#prihod");
const leftP = document.querySelector(".left-p");
const rightP = document.querySelector(".right-p");
const inputOpis = document.querySelector("#opis");
const selectText = document.querySelector(".select-text");
const opisText = document.querySelector(".opis-text");
const numberText = document.querySelector(".number-text");

const divError = document.querySelector(".error");

ispisMesec();

function addToDom() {
  let op = select.options[select.selectedIndex];
  let p1 = document.createElement("p");
  p1.classList.add("p1");

  let p2 = document.createElement("p");
  p2.classList.add("p2");
  if (op.text == "Prihod") {
    if (leftP.innerHTML == "") {
      p1.innerHTML = `<hr> <span class="prvi-span"> ${inputOpis.value} </span> <span class="drugi-span"> ${inputIznos.value}</span> <hr>`;
      leftP.append(p1);
      ukupnoPrihod.textContent = inputIznos.value;
      ukupnoNovac.textContent = inputIznos.value;

      p1.addEventListener("mouseover", () => {
        if (!p1.querySelector("button")) {
          let btnDelete = document.createElement("button");
          btnDelete.textContent = "X";
          btnDelete.classList.add("btn-delete");
          p1.prepend(btnDelete);
          ukupnoPrihod.textContent = inputIznos.value;
          btnDelete.addEventListener("click", () => {
            p1.remove();
          });
        }
      });
    } else {
      p1.innerHTML = `<span class="prvi-span"> ${inputOpis.value} </span> <span class="drugi-span"> ${inputIznos.value}</span> <hr>`;
      leftP.append(p1);
      ukupnoPrihod.textContent = inputIznos.value;
      ukupnoNovac.textContent = inputIznos.value;

      p1.addEventListener("mouseover", () => {
        if (!p1.querySelector("button")) {
          let btnDelete = document.createElement("button");
          btnDelete.textContent = "X";
          btnDelete.classList.add("btn-delete");
          p1.prepend(btnDelete);
          btnDelete.addEventListener("click", () => {
            p1.remove();
          });
        }
      });
    }
  } else {
    if (rightP.innerHTML == "") {
      p1.innerHTML = `<hr> <span class="treci-span"> ${inputOpis.value} </span> <span class="cetvrti-span"> ${inputIznos.value}</span> <hr>`;
      rightP.append(p1);
      ukupnoRashod.textContent = inputIznos.value;
      p1.addEventListener("mouseover", () => {
        if (!p1.querySelector("button")) {
          let btnDelete = document.createElement("button");
          btnDelete.classList.add("btn-delete2");
          btnDelete.textContent = "X";
          p1.appendChild(btnDelete);
          btnDelete.addEventListener("click", () => {
            p1.remove();
          });
        }
      });
    } else {
      p1.innerHTML = `<span class="treci-span"> ${inputOpis.value} </span> <span class="cetvrti-span"> ${inputIznos.value}</span> <hr>`;
      rightP.append(p1);
      ukupnoRashod.textContent = inputIznos.value;
      p1.addEventListener("mouseover", () => {
        if (!p1.querySelector("button")) {
          let btnDelete = document.createElement("button");
          btnDelete.classList.add("btn-delete2");
          btnDelete.textContent = "X";
          p1.appendChild(btnDelete);
          btnDelete.addEventListener("click", () => {
            p1.remove();
          });
        }
      });
    }
  }
}
let niz = [];

forma.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValidate = true;
  if (select.value == "0") {
    selectText.textContent = "";
    selectText.innerHTML = `Ništa nije <br> selektovano.`;
    isValidate = false;
  }
  if (inputOpis.value == "") {
    opisText.textContent = "";
    opisText.innerHTML = `Polje je obavezno.`;
    isValidate = false;
  }
  if (inputIznos.value == "") {
    numberText.textContent = "";
    numberText.innerHTML = `Polje je obavezno.`;
    isValidate = false;
  } else if (inputIznos.value <= 0) {
    numberText.textContent = "";
    numberText.innerHTML = `Broj mora biti <br> veći od nule.`;
    isValidate = false;
  }
  if (isValidate) {
    divError.textContent = "";
    addToDom();

    forma.reset();
  }
  let op = select.options[select.selectedIndex];
  if ((op.text = "Prihod")) {
    let prihodObj = {
      Vrsta: select.options[select.selectedIndex].text,
      Opis: inputOpis.value,
      Iznos: inputIznos.value,
    };
    niz.push(prihodObj);
    console.log(niz);

    // let ukupanIznosP = 0
    // niz.forEach(objekat => {
    //     ukupanIznosP += objekat.Iznos
    // })

    // ukupnoPrihod.textContent = ukupanIznosP
  } else if ((op.text = "Rashod")) {
    let rashodObj = {
      Vrsta: "Rashod",
      Opis: inputOpis.value,
      Iznos: inputIznos.value,
    };
    niz.push(rashodObj);
    console.log(niz);
  }
});
