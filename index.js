let buttonValue = document.getElementById('button-input')

buttonValue.addEventListener('click', function () {
    let regexName = /[A-Z]/
    let inputValue = document.getElementById('input').value

    if (inputValue[0].match(regexName)) {
        document.querySelector('p').innerHTML = 'huruf pertama adalah huruf Besar'
    } else {
        document.querySelector('p').innerHTML = 'huruf pertama adalah huruf Kecil'
    }
})