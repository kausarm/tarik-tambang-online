const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const mark = document.getElementById("mark");
const rope = document.getElementById("rope");
let interval;
let count = 10;

function moveLeft() {
    const playerLeft1 = parseInt(window.getComputedStyle(player1).getPropertyValue("left"));
    const playerLeft2 = parseInt(window.getComputedStyle(player2).getPropertyValue("left"));
    const ropeLeft = parseInt(window.getComputedStyle(rope).getPropertyValue("left"));
    const markLeft = parseInt(window.getComputedStyle(mark).getPropertyValue("left"));
    let move = Math.floor(Math.random() * 10)
    player1.style.left = playerLeft1 - move + "px";
    player2.style.left = playerLeft2 - move + "px";
    rope.style.left = ropeLeft - move + "px";
    mark.style.left = markLeft - move + "px";
    return mark.style.left
}

function moveRight() {
    const playerLeft1 = parseInt(window.getComputedStyle(player1).getPropertyValue("left"));
    const playerLeft2 = parseInt(window.getComputedStyle(player2).getPropertyValue("left"));
    const ropeLeft = parseInt(window.getComputedStyle(rope).getPropertyValue("left"));
    const markLeft = parseInt(window.getComputedStyle(mark).getPropertyValue("left"));
    const move = 2;
    player1.style.left = playerLeft1 + move + "px";
    player2.style.left = playerLeft2 + move + "px";
    rope.style.left = ropeLeft + move + "px";
    mark.style.left = markLeft + move + "px";
    return mark.style.left
}

const start = () => {
    document.getElementById("start").disabled = true;
    const timer = setInterval(() => {
        document.getElementById("timer").innerText = count + " detik";
        count--;
        if (count < 0) {
            clearInterval(timer)
            clearInterval(interval)
            document.getElementById("timer").innerText = "SELESAI!"
            window.alert("SELESAI!")
        }
    }, 1000)

    interval = setInterval(moveLeft, 400)

    document.addEventListener("mousedown", ev => {
        if (count > 0) {moveRight()}
    })
}


// document.addEventListener("keydown", ev => {
//     if (both === 0){
//         both++;
//         if (ev.key === "ArrowRight"){
//             interval = setInterval(moveRight, 1);
//         }
//         if (ev.key === "ArrowLeft"){
//             interval = setInterval(moveLeft, 1);
//         }
//     }
// })
//
// document.addEventListener("keyup", ev => {
//     clearInterval(interval);
//     both = 0;
// })







// const character = document.getElementById("character");
// const block = document.getElementById("block");
//
// function jump() {
//     if (character.classList != "animate") {
//         character.classList.add("animate");
//     }
//     setTimeout(function () {
//         character.classList.remove("animate")
//     }, 500)
// }
//
// const checkDead = setInterval(function () {
//     const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
//     const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
//     if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
//         block.style.animation = "none";
//         block.style.display = "none";
//         alert("u lose");
//     }
// }, 10);