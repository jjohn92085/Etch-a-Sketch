//creates multiple divs
function createDivs() {
    const containerDiv = document.getElementById('mainDiv');

    for (let i = 0; i <= 16; i++) {
        const newDivs = document.createElement('div')
        newDivs.innerText= 'testdivs'
        containerDiv.appendChild(newDivs)
    }
}

window.addEventListener('DOMContentLoaded', createDivs)