const lampElement = document.querySelector(".white_lamp");
console.log(lampElement)
lampElement.addEventListener('click', function () {
    console.log("ho cliccato sul div")

    lampElement.innerHTML += <img src="img / yellow_lamp.png" alt="">
})
