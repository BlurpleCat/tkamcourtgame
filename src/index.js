const game = require('./game').default;
window.onload = () => {
    const outputBox = document.getElementById('output');
    const form = document.getElementById('forminput');
    const input = document.getElementById('input');
    function println(text) {
        outputBox.innerText += text + "\n";
        outputBox.scrollTop = outputBox.scrollHeight
    }
    function nextInt() {
        return new Promise((resolve) => {
            form.onsubmit = () => {
                const inputNumber = Number(input.value);
                if(inputNumber > 0) {
                    resolve(inputNumber);
                    input.value = "";
                }
            }
        });
    }
    game(println, nextInt);
    console.log("The game has loaded");
}
