function updateClock() {

  let now = new Date();

  let hrs = now.getHours().toString().padStart(2, "0");

  let mins = now.getMinutes().toString().padStart(2, "0");

  let secs = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("clock").innerText = hrs + ":" + mins + ":" + secs;

}

setInterval(updateClock, 1000);

updateClock();