let inputGrade1 = document.getElementById("grade1")
let inputGrade2 = document.getElementById("grade2")

function calculate() {
    let scoreGrade1 = inputGrade1.value
    let g1 = parseInt(scoreGrade1)
   
    let scoreGrade2 = inputGrade2.value
    let g2 = parseInt(scoreGrade2)
   
    let totalScore = (g1 + g2) / 2
   
    let result = totalScore

    if (result >= 7) {
        average.innerHTML = `
        <p>Your average is: </p>
        <p style="color: blue;">${result}</p>
        <p>You have passed to the next level.</p>`
    } else {
        average.innerHTML = `
        <p>Unfortunately, your average is: </p>
        <p style="color: red;">${result}</p>
        <p>You did not reach the minimum to pass.</p> 
        <p style="text-decoration: underline;">Talk to your coordinator.</p>`
    }
}