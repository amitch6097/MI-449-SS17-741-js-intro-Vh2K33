//buttons
var openhatButton = document.getElementById('openhat-button')
var hihatButton = document.getElementById('hihat-button')
var boomButton = document.getElementById('boom-button')
var kickButton = document.getElementById('kick-button')
var snareButton = document.getElementById('snare-button')
//sounds
var hihatSound = document.getElementById('hihat')
var boomSound = document.getElementById('boom')
var openhatSound = document.getElementById('openhat')
var kickSound = document.getElementById('kick')
var snareSound = document.getElementById('snare')
//boom listners
boomButton.addEventListener('click', function(){
  boomSound.play()
})
boomButton.addEventListener('mouseenter', function(){
  boomSound.play()
})
//hihat listners
hihatButton.addEventListener('click', function(){
  hihatSound.play()
})
hihatButton.addEventListener('mouseenter', function(){
  hihatSound.play()
})
//openhat listners
openhatButton.addEventListener('click', function(){
  openhatSound.play()
})
openhatButton.addEventListener('mouseenter', function(){
  openhatSound.play()
})
//kick listners
kickButton.addEventListener('click', function(){
  kickSound.play()
})
kickButton.addEventListener('mouseenter', function(){
  kickSound.play()
})
//snare listners
snareButton.addEventListener('click', function(){
  snareSound.play()
})
snareButton.addEventListener('mouseenter', function(){
  snareSound.play()
})
