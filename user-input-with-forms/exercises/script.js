function init() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let testName = document.querySelector("input[name=testName]");
    let testDate = document.querySelector("input[name=testDate]");
    let rocketType = document.querySelector("select[name=rocketType]");
    let boosterCount = document.querySelector("input[name=boosterCount]");
    let windRating = document.querySelector("input[name=windRating]:checked");

    if (testName.value === "" || testDate.value === "" || rocketType.value === "" || boosterCount.value === "" || !windRating) {
      alert("All fields are required!");
      event.preventDefault();
      return;
    }
  });
}

window.addEventListener("load", init);
