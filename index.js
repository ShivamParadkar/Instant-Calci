let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '%'){
            buttonText = '/100*';
            screenValue +=buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'mod'){
            buttonText = '%';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'sqrt'){
            buttonText = 'Math.sqrt';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'pi'){
            buttonText = '3.141592653589793';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'Back'){
            let str = screenValue.slice(0,screenValue.length-1);
            screenValue = str;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

