// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  const upButton = document.getElementById("up");
  const downButton = document.getElementById("down");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const takeoffButton = document.getElementById("takeoff");
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const rocket = document.getElementById("rocket");

  function centerRocket() {
    const backgroundWidth = shuttleBackground.clientWidth;
    const backgroundHeight = shuttleBackground.clientHeight;
    const rocketWidth = rocket.clientWidth;
    const rocketHeight = rocket.clientHeight;
    const centerPositionLeft = backgroundWidth / 2 - rocketWidth / 2;
    const centerPositionTop = backgroundHeight - rocketHeight;
    rocket.style.left = centerPositionLeft + "px";
    rocket.style.top = centerPositionTop + "px";
  }

  function moveRocket(deltaX, deltaY) {
    const currentLeft = parseInt(window.getComputedStyle(rocket).left);
    const currentTop = parseInt(window.getComputedStyle(rocket).top);
    const newLeft = currentLeft + deltaX;
    const newTop = currentTop + deltaY;
    const maxLeft = shuttleBackground.clientWidth - rocket.clientWidth;
    const maxTop = shuttleBackground.clientHeight - rocket.clientHeight;

    if (newLeft >= 0 && newLeft <= maxLeft) {
      rocket.style.left = newLeft + "px";
    }

    if (newTop >= 0 && newTop <= maxTop) {
      rocket.style.top = newTop + "px";
    }
  }

  takeoffButton.addEventListener("click", (event) => {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
      moveRocket(0, -10);
    }
  });

  landButton.addEventListener("click", (event) => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
    centerRocket();
  });

  abortButton.addEventListener("click", (event) => {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      centerRocket();
    }
  });

  upButton.addEventListener("click", (event) => {
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    moveRocket(0, -10);
  });

  downButton.addEventListener("click", (event) => {
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    moveRocket(0, 10);
  });

  leftButton.addEventListener("click", (event) => {
    moveRocket(-10, 0);
  });

  rightButton.addEventListener("click", (event) => {
    moveRocket(10, 0);
  });

  window.addEventListener("resize", centerRocket);
  centerRocket();
}

window.addEventListener("load", init);
