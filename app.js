

const range = document.querySelector('.length-container input')
const passLength = document.querySelector('.length-container p span')
const checkbox = document.querySelectorAll('ul li input')
const btn = document.querySelector('.btn')
const show = document.querySelector('.password-container input')
const strength = document.querySelector('.password-strength span')

const copy = document.querySelector('.password-container .copy')








const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[]{};:.,*-#@<>~"

}

function getRange() {
    passLength.innerHTML = range.value
}
getRange()


function generatator() {

    let staticPassword = '';
    let randomPassword = '';
    let flag = false;




    checkbox.forEach((option) => {

        if (option.checked) {
            if (option.id !== 'ex-duplicate' && option.id !== 'spaces') {
                staticPassword += characters[option.id]
            } else if (option.id === 'spaces') {
                staticPassword += ` ${staticPassword}  `
            } else {
                flag = true
            }

        }
    })

    for (let i = 0; i < range.value; i++) {

        let char = staticPassword[Math.floor(Math.random() * staticPassword.length)]
        if (flag) {
            !randomPassword.includes(char) || char == ' ' ? randomPassword += char : i--;
        } else {
            randomPassword += char
        }

    }

    show.value = randomPassword;
    showStrength()

}



function showStrength() {
    if (range.value >= 18) {
        strength.classList.add('high')
    } else if (range.value >= 8) {
        strength.classList.add('medium')
        strength.classList.remove('high')

    } else {
        strength.classList.remove('medium')
        strength.classList.remove('high')
    }
}



copy.addEventListener('click', () => {
    navigator.clipboard.writeText(show.value)
    copy.classList.remove('fa-clone')
    copy.classList.add('fa-check')

    setTimeout(() => {
        copy.classList.remove('fa-check')
        copy.classList.add('fa-clone')
    },1000)

})

showStrength()
btn.addEventListener('click', generatator)
range.addEventListener('input', getRange)
