let user = document.querySelector("#user");
let playbtn = document.querySelector("#play");
let resetbtn = document.querySelector("#reset");
let resul = document.querySelector("#result");
let chance = document.querySelector("#chance");
let chances = 5;
let history = [];
let gameOver = false;

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

resetbtn.addEventListener("click", reset);

randomNum();

playbtn.addEventListener("click", play);
function play() {
  //   console.log("게임시작");
  let userValue = user.value;

  if (userValue < 1 || userValue > 100) {
    result.textContent = "1과 100사이의 숫자를 입력하세요";
    return;
  }

  console.log(history.includes(userValue));
  if (history.includes(userValue)) {
    result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }

  if (userValue < computerNum) {
    // console.log("up");
    result.textContent = "up";
    document.querySelector("#img").src = "img/up.jpg";
  } else if (userValue > computerNum) {
    // console.log("down");
    result.textContent = "down";
    document.querySelector("#img").src = "img/down.jpg";
  } else {
    // console.log("bingo");
    result.textContent = "bingo";
    document.querySelector("#img").src = "img/bingo.jpg";
  }

  chances = chances - 1;
  //   console.log(chances);
  chance.textContent = `남은 찬스 : ${chances}번`;

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playbtn.disabled = true;
  }
}

resetbtn.addEventListener("click", reset);
function reset() {
  user.value = "";
  img.src = "img/뾰로롱.jpg";
  result.textContent = "결과화면 : up / down / bingo";
  gameOver = false;
  chances = 5;
  chance.innerHTML = `남은 기회 ${chances}번`;
  history = [];
}
reset();
user.addEventListener("focus", () => {
  user.value = "";
});
