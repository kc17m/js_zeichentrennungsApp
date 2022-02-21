let inputSepString = document.getElementById("sepString");
let inputSepPosition = document.getElementById("sepPosition");
let sepBefore = document.getElementById("sepBefore");
let sepAfter = document.getElementById("sepAfter");
let output_before = document.getElementById("output_before");
let output_after = document.getElementById("output_after");

console.log(inputSepString, inputSepPosition, sepBefore, sepAfter, output_before, output_after);

let separ = () => {
    let beforePart, afterPart;
    // let split = inputSepString.value.split(" ");
    let sepString = inputSepString.value;
    let sepPosition = inputSepPosition.value;
    console.log(sepString, sepPosition);

    let firstPos = sepPosition[0];
    console.log(firstPos);
    if (!sepString.includes(sepPosition)) {
        output_before.innerHTML = `<br>Das Zeichen konnte leider nicht gefunden werden<br>`;
        output_after.innerHTML = `${sepString}`;
    }
    else {
        if (sepBefore.checked) {
            console.log(true);
            beforePart = sepString.slice(0, sepString.indexOf(sepPosition));
            console.log(beforePart);
            afterPart = sepString.slice(sepString.indexOf(sepPosition))
            console.log(afterPart);
        }
        else {
            beforePart = sepString.slice(0, (sepString.indexOf(sepPosition) + sepPosition.length));
            console.log(beforePart);
            afterPart = sepString.slice((sepString.indexOf(sepPosition) + sepPosition.length) + 1);
            console.log(afterPart);
        }
        output_before.innerHTML = `<br>${beforePart}<br>`;
        output_after.innerHTML = `<br>${afterPart}<br>`;
    }

};