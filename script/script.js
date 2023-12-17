let database = [
  {
    username: "kevin",
    password: "secret",
  },
];

let newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired",
  },
  {
    username: "sally",
    timeline: "js is cool",
  },
  {
    username: "sally",
    timeline: "js is cool",
  },
];

// function isUserValid(username, password) {
//   //自動測試輸入的帳號密碼與database相不相符
//   for (let i = 0; i < database.length; i++) {
//     if (
//       username === database[i].username &&
//       password === database[i].password
//     ) {
//       return true;
//     } else {
//       alert("sorry, wrong");
//     }
//   }
//   return false;
// }

function signIn(userNamePrompt, PasswordPrompt) {
  //若帳號密碼正確即顯示資料庫內容
  if (
    userNamePrompt === database[0].username &&
    PasswordPrompt === database[0].password
  ) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

let userNamePrompt = prompt("What's your username?"); //prompt提示
let PasswordPrompt = prompt("What's your password?");

signIn(userNamePrompt, PasswordPrompt); //將prompt輸入的參數 回call到signin的function

// login();
// function signIn(username, password) { //若帳號密碼正確即顯示資料庫內容
//   if (isUserValid(username, password)) {
//     console.log(newsFeed);
//   } else {
//     alert("Sorry, wrong username and password");
//   }
// }

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let deletebtn = document.getElementsByClassName("delete");
let items = ul.getElementsByTagName("li");


for (let i = 0; i < deletebtn.length; i++) { //設置刪除按鈕的點擊事件
  deletebtn[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function lineThrough(event) {
  let a = event.target;

  if (count == 0) {
    a.classList.add("done");
  } else {
    a.classList.toggle("done");
  }
  count++;
}
ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = removeParent;

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML = li.innerHTML + " ";
  li.appendChild(btn);

  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

