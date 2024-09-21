//Modal logic

let openButton = document.querySelector("#button-div");
let modal = document.querySelector("#modal-structure");
let closeButton = document.querySelector("#close");

openButton.addEventListener("click", () => {
    modal.style.display = "flex";
    console.log('button press confirmed');
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    console.log('button press confirmed');
});
