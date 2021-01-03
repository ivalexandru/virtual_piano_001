const pianoLetters = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ"] // for event.code
// const piano_letters = ["A","S","D","F","G","H","J"] // for event.key

document.addEventListener("keydown", function(event){
    const keyName = event.code;  // event.key
    if (keyName.startsWith('Key') && pianoLetters.includes(keyName)) {
        const actualKey = keyName.substr(3) // strip 'Key' from keyName
        console.log(`The '${actualKey}' key is pressed.`);

        let audio = new Audio(`./key_audio/${actualKey}.mp3`);
        audio.play();

    } else {
        console.log(`${keyName} key is unbound`);
    }
});