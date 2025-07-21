document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('InputBox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.innerText;

            if (buttonText === 'AC') {
                inputBox.value = '';
            } else if (buttonText === 'D') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (buttonText === '%') {
                inputBox.value = (parseFloat(inputBox.value) / 100).toString();
            } else if (buttonText === '=') {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += buttonText;
            }
        });
    });
});
