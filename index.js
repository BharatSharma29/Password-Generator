const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passOne = document.getElementById('pass1')
const passTwo = document.getElementById('pass2')
const length = document.getElementById('inp-num')

document.getElementById('btn').addEventListener('click', () => {
    let pass1 = ''
    let pass2 = ''    

    for(let i=0 ; i<length.value ; i++){
        let x = Math.floor((Math.random() * characters.length))
        let y = Math.floor((Math.random() * characters.length))
        pass1 += characters[x]
        pass2 += characters[y]
    }  
    passOne.innerText = pass1
    passTwo.innerText = pass2
})

// passOne.addEventListener('click', () => {
//     navigator.clipboard.writeText(passOne.innerText);
//     alert("Copied the text: " + passOne.innerText);
// })

// passTwo.addEventListener('click', () => {
//     navigator.clipboard.writeText(passTwo.innerText);
//     alert("Copied the text: " + passTwo.innerText);
// })