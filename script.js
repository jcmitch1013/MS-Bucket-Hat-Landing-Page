'use strict';

//When you click the small image
//A bigger image is shown
//add shadow to background

//Module pop ups
const leftMod = document.querySelector('.left_mod');
const midMod = document.querySelector('.mid_mod');
const rightMod = document.querySelector('.right_mod');

const overlay = document.querySelector('.modal-images');

//Image "buttons"
const leftBtn = document.querySelector('#hat_left');
const rightBtn = document.querySelector('#hat_right');

//Word Button
const markBtn = document.querySelector('.mark-btn');

const closeModal = function () {
  leftMod.classList.add('hidden');
  midMod.classList.add('hidden');
  rightMod.classList.add('hidden');
  overlay.classList.add('hidden');
};

leftBtn.addEventListener('click', function () {
  leftMod.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

markBtn.addEventListener('click', function () {
  midMod.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

rightBtn.addEventListener('click', function () {
  rightMod.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', closeModal);
