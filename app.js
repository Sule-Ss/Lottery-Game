let numberInput = document.getElementById("numberInput");
let luckyButton = document.getElementById("numLucky");
let reset = document.getElementById("reset");
let numbers = document.getElementById("numbers");
// let liste = document.querySelector(".liste");

numberInput.focus();

const createLine = (numberList) => {
  return `<div class="liste">
    <span>${numberList[0]}</span>
    <span>${numberList[1]}</span>
    <span>${numberList[2]}</span>
    <span>${numberList[3]}</span>
    <span>${numberList[4]}</span>
    <span>${numberList[5]}</span>
    <span class="joker">${numberList[6]}</span>
    <span class="superStar">${numberList[7]}</span>
</div>`;
};

luckyButton.addEventListener("click", clickFunc);
function clickFunc() {
  if (
    numberInput.value < 1 ||
    numberInput.value > 8 ||
    numberInput.value == ""
  ) {
    alert("Enter a number between 1 and 8");
    numberInput.value = "";
  }
  let count = 0;
  while (count < +numberInput.value) {
    let numberList = [];
    while (numberList.length < 6) {
      let random = Math.round(Math.random() * 90 + 1);
      if (numberList.includes(random)) {
        continue;
      } else {
        numberList.push(random);
      }
      numberList.sort((a, b) => a - b);
    }
    let random = Math.round(Math.random() * 90 + 1);
    if (numberList.includes(random)) {
      continue;
    } else {
      numberList.push(random);
    }

    let randomS = Math.round(Math.random() * 90 + 1);
    numberList.push(randomS);

    count += 1;
    numbers.innerHTML += createLine(numberList);
  }
  numberInput.value = "";
  luckyButton.disabled = true;
  luckyButton.style.opacity = "0.5";

  reset.addEventListener("click", () => {
    numbers.innerHTML = "";
    luckyButton.disabled = false;
    luckyButton.style.opacity = "1";
    numberInput.focus();
  });
}
