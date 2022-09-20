const firstLogo = document.getElementsByClassName(".icon2");
const firstLine = document.getElementById("mainline");

firstLine.addEventlistener("mouseover", function handleMouseOver() {
  firstLine.style.color = "blue";
});

firstLine.addEventlistener("mouseout", function handleMouseOut() {
  firstLine.style.color = "orange";
});

// const promiseObject = fetch("./data.json");

// const promiseObjectAgain = promiseObject
//   .then((response) => {
//     const promiseObject2 = response.json();
//     return promiseObject2;
//   })
//   .then(finalData => {
//     console.log('Final data is',finalData)
//   });
