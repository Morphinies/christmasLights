const timerId = {};

function changeOpacity(elem, time) {
  const elemId = elem.className.split(" ")[1];
  let i = 1;
  let up = true;
  console.log();
  timerId[elemId] = setTimeout(function run() {
    elem.style.opacity = i + "%";
    if (i === 100 || i === 0) {
      up = !up;
    }
    if (up) {
      i++;
    } else if (!up) {
      i--;
    }
    timerId[elemId] = setTimeout(run, time);
  }, time);
}

function startShow() {
  const lights = document.getElementsByClassName("light");
  for (let light of lights) {
    let time;
    switch (light.className) {
      case "light yellow":
        time = 5;
        changeOpacity(light, time);
        break;
      case "light blue":
        time = 7.5;
        changeOpacity(light, time);
        break;
      case "light red":
        time = 5;
        changeOpacity(light, time);
        break;
      case "light green":
        time = 10;
        changeOpacity(light, time);
        break;
    }
  }
}

function stopShow() {
  clearTimeout(timerId.yellow);
  clearTimeout(timerId.blue);
  clearTimeout(timerId.red);
  clearTimeout(timerId.green);
  //   clearInterval(blueTimerId);
  //   clearInterval(redTimerId);
  //   clearInterval(greenTimerId);
}
