'use strict';

const inputPW = document.querySelector('#inputPW');

const btnShowPW = document.querySelector('.btnShowPW');

const inputTime = document.querySelector('#inputTime');

const btnTime = document.querySelector('.btnTime');

const btnGenerate = document.querySelector('.btnGenerate');

const btnLogin = document.querySelector('.btnLogin');

const divPW = document.querySelector('.password');

let partPW = 0;

let password = 0;

//Function
const showModal = function () {
  const modal = [
    document.querySelector('.modal'),
    document.querySelector('.filter'),
  ];
  for (const item of modal) {
    item.classList.toggle('hidden');
  }
};

//Show or Hide password
btnShowPW.addEventListener('click', function () {
  const imgShow = document.querySelector('.imgShow');
  if (inputPW.type === 'password') {
    inputPW.type = 'text';
    imgShow.src = 'eye-icon.png';
  } else if (inputPW.type === 'text') {
    inputPW.type = 'password';
    imgShow.src = 'eye-off-icon.png';
  }
});

//Get Current Minute
btnTime.addEventListener('click', function () {
  let date = new Date();
  inputTime.value = date.getMinutes();
});

// Generate CODE:
btnGenerate.addEventListener('click', function () {
  document.querySelector('.newPW')?.remove();
  let minutes;

  if (inputTime.value) {
    minutes = Number(inputTime.value);
  }
  if (minutes >= 0 && minutes <= 60) {
    for (let i = minutes - 1; i >= 1; i--) {
      if (!partPW) {
        partPW += minutes * i;
      } else {
        partPW *= i;
      }
    }
    const newPW = document.createElement('h1');
    password = 'LIBERDADE' + partPW;
    newPW.textContent = password;
    newPW.classList.add('newPW');
    document.querySelector('body').appendChild(newPW);
  } else {
    inputTime.value = '';
    inputTime.placeholder = 'Try a valide time!';
  }
});

// Testing password:
btnLogin.addEventListener('click', function () {
  if (password === inputPW.value) {
    showModal();
  } else {
    inputPW.value = '';
    inputPW.placeholder = 'INVALID PASSWORD!';
  }
});

document.querySelector('body').addEventListener('click', function (e) {
  if (e.target.classList.contains('filter')) {
    showModal();
  }
});
