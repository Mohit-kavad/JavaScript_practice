const button = document.querySelector("button");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (succsess) => {
        resolve(succsess);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

function setTimer(duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
}

function trackUserHandler() {
  //for remove nestig promise provide chaining
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch((err) => {
      console.log(err);
      return "On we go...";
    })
    .then((data) => {
      console.log(data, positionData); //here i am getting data from the inner promise (which is from return setTimer())
    });

  //nesting here not better way
  //   getPosition().then(posData=>{
  //     console.log(posData);
  //     setTimer(2000).then(data =>{
  //         console.log(data);
  //     })
  //   });

  console.log("getting position...");
}

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     // first call back
//     (posData) => {
//       //second callback
//       setTimeout(() => {
//         console.log(posData); //callback hell condition
//       }, 2000);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   console.log("getting position...");
// }

button.addEventListener("click", trackUserHandler);
