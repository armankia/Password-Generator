let char = ["!", ".", "!", "@", "£", "$", "%", "&", "*", "+"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

let passwordOne = document.getElementById("pass-one")
let passwordTwo = document.getElementById("pass-two")
let passwordThree = document.getElementById("pass-three")
let passwordFour = document.getElementById("pass-four")


function renderPassword() {
    let num = [0, 1, 2]
    let password = ""
    for ( let i = 0; i< 15; i++ ){
        let choice = num[Math.floor(Math.random() * num.length)]
        if ( choice === 0 ){
            password += alphabet[Math.floor(Math.random() * alphabet.length)]
        } else if ( choice === 1 ){
            password += Math.floor( Math.random() * 10 )
        } else if ( choice === 2 ){
            password += char[Math.floor(Math.random() * char.length)]
        }
    } 
    return password
}

function setPassword() {
    passwordOne.value = renderPassword()
    passwordTwo.value = renderPassword()
    passwordThree.value = renderPassword()
    passwordFour.value = renderPassword()
}
