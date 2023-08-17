
const sounds = {
    49: new Audio (`Audio/boom.wav`),
    50: new Audio (`Audio/clap.wav`),
    51: new Audio (`Audio/hihat.wav`),
    52: new Audio (`Audio/kick.wav`),
    53: new Audio (`Audio/openhat.wav`),
    54: new Audio (`Audio/ride.wav`),
    55: new Audio (`Audio/snare.wav`),
    56: new Audio (`Audio/tink.wav`),
    57: new Audio (`Audio/tom.wav`),
    
}


function on_keypress(event){
    sounds[event.which].play()
    console.log(event.which)
 
}

window.addEventListener(`keydown`, on_keypress)
