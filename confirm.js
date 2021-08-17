const game = document.getElementById("game")
const player2Image = document
  .getElementsByClassName("player2")[0]
  .getElementsByTagName("img")[0]
const pull = document.getElementById("tarik")
const duration = document.getElementById("sisa-waktu")
const player2 = document.getElementById("player2")

let pos = 0

const COM_SPEED = 5
const PLAYER_SPEED = 7
let START = false
let END = false
let TIME = 10
let timer

window.onload = () => {
  player2.addEventListener("change", (e) => {
    player2Image.setAttribute(
      "src",
      `https://robohash.org/${e.target.value}?set=set3`
    )
  })

  const move = (n = -1) => {
    if (!END) {
      pos += n
      game.style.transform = `translate(${pos}px)`
    }
  }

  const start = () => {
    if (!START && !END) {
      START = setInterval(() => {
        move(-COM_SPEED)
      }, 100)

      timer = setInterval(() => {
        if (TIME <= 0 || Math.abs(pos) > 100) {
          END = true
          clearInterval(START)
          clearInterval(timer)
          alert(
            pos < 0
              ? `Yahhh.. kamu kalah`
              : `Yeeey... selamat ${player2.value} kamu menang!`
          )
        } else {
          TIME--
                 }
        duration.innerText = TIME
        if(END) {
          let ulang = confirm("Mau Main Lagi?");
          if (ulang) {
            $(document).ready(function () {
              $('meta[name="description"]').remove();
              $("head").append('<meta http-equiv="refresh" content="0.1">');
            });
          }
          else{
            alert("Baiqlah")
          }
        }
       
      }, 1000)
    }
    move(PLAYER_SPEED)

  }

  pull.addEventListener("click", start)
  document.addEventListener("keydown", (e) => {
    if (e.key == " ") start()
  })
}
