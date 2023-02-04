const btnStartEl = document.getElementById("btnStart");
const btnStopEl = document.getElementById("btnStop");
const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);
  led.blink(500);
});

btnStartEl.addEventListener("click", (evt) => {
  console.log("btnStartEl");
});

btnStopEl.addEventListener("click", (evt) => {
  console.log("btnStopEl");
});
