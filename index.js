var addSoundToButton = function (soundName) {
  //get button
  var button = document.getElementById(soundName + '-button')
  //get sound
  var sound = document.getElementById(soundName)
  //add listners
  button.addEventListener('click', function(){
    sound.play()
  })
  button.addEventListener('mouseenter', function(){
    sound.play()
  })
}
//add events listners for every button
addSoundToButton('openhat')
addSoundToButton('hihat')
addSoundToButton('boom')
addSoundToButton('kick')
addSoundToButton('snare')
