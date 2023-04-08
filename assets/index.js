let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}


let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    
    const savedNumbers = localStorage.getItem("gecmisBilgi");
    const numbersArray = savedNumbers.split("-").map(Number);
    const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    const totaltDiv = document.getElementById("total");
    totaltDiv.innerText = "Total People:" + sum;
    localStorage.setItem( "totalPeople", sum )

    countEl.textContent = 0
    count = 0
}