// function scope
let subject 

function createThink() {
    subject  = 'Study'
    return subject
}

console.log(subject)
createThink()
console.log(subject)