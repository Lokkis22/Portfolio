const words = ["Computer science student", "Division 1 student-athlete", "Tech nerd"]

let wordIndex = 0;
let charIndex = 0;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    console.log(currentWord, currentChar);
}

typeEffect();