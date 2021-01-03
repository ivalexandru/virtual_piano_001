
const piano_letters = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ"] // for event.code
// const piano_letters = ["A","S","D","F","G","H","J"] // for event.key

document.addEventListener("keydown", function(event){
    let letter = event.code;  // event.key

    if (piano_letters.includes(letter)) {
        
        switch(letter) {
            case "KeyA" : console.log("The 'A' key is pressed."); break;
            case "KeyS" : console.log("The 'S' key is pressed."); break;
            case "KeyD" : console.log("The 'D' key is pressed."); break;
            case "KeyF" : console.log("The 'F' key is pressed."); break;
            case "KeyG" : console.log("The 'G' key is pressed."); break;
            case "KeyH" : console.log("The 'H' key is pressed."); break;
            case "KeyJ" : console.log("The 'J' key is pressed."); break;
            default: console.log("error in switch")
        }

    } else {
        console.log(`${letter} key is unbound`);
    }
    });







