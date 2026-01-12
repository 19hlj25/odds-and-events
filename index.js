let numberBank = [];
let odds = [];
let evens = [];

function isEven(num) {
  return num % 2 === 0;
}

function NumberBank() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h2>Number Bank</h2>
    <p>${numberBank.join(", ")}</p>
  `;
  return section;
}

function Odds() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h2>Odds</h2>
    <p>${odds.join(", ")}</p>
  `;
  return section;
}

function Evens() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h2>Evens</h2>
    <p>${evens.join(", ")}</p>
  `;
  return section;
}

function NumberForm() {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter a number";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add number";

  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.type = "button";

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.type = "button";

  // ADD NUMBER
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") return;

    numberBank.push(Number(input.value));
    input.value = "";
    render();
  });

  // SORT 1
  sortOneBtn.addEventListener("click", () => {
    if (numberBank.length === 0) return;

    const num = numberBank.shift();
    isEven(num) ? evens.push(num) : odds.push(num);
    render();
  });

  // SORT ALL
  sortAllBtn.addEventListener("click", () => {
    while (numberBank.length > 0) {
      const num = numberBank.shift();
      isEven(num) ? evens.push(num) : odds.push(num);
    }
    render();
  });

  form.append(input, addBtn, sortOneBtn, sortAllBtn);
  return form;
}
const app = document.getElementById("app");

function render() {
  app.innerHTML = "";

  app.append(
    NumberForm(),
    NumberBank(),
    Odds(),
    Evens()
  );
}

render();
