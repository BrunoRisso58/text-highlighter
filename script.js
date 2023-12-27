function transformText(event) {

    event.preventDefault();

    let text = document.getElementById('editor').value;
    let textArray = text.split(' ');

    let transformedTextArray = new Array();
    textArray.forEach(word => {
        if (word.length <= 3) {
            transformedTextArray.push(`<strong>${word}</strong>`);
        } else if (word.length >= 4 && word.length <= 7) {
            transformedTextArray.push(`<strong>${word[0] + word[1]}</strong>${word.substr(2)}`);
        } else if (word.length > 7) {
            transformedTextArray.push(`<strong>${word[0] + word[1] + word[2]}</strong>${word.substr(3)}`)
        }
    });
    let newText = transformedTextArray.join(' ');
    
    document.getElementById('newText').innerHTML = newText;
    
}

document.getElementById('submitButton').addEventListener('click', transformText, false);