document.querySelector(".camera_icon svg").addEventListener("click", () => {
    document.querySelector(".picture_checkbox").checked = true;
    // const constraints = {
    //   video: {
    //     facingMode: { ideal: "environment" },
    //   },
    //   audio: false,
    // };
    mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        camPrev.srcObject = stream;
        camPrev.addEventListener("loadedmetadata", () => {
          camPrev.play();
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
    // mediaDevices
    //   .getUserMedia(constraints)
    //   .then((stream) => {
    //     camPrev.srcObject = stream;
    //     camPrev.addEventListener("loadedmetadata", () => {
    //       camPrev.play();
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     alert(err.message);
    //   });
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".camera_canvas_block").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    // startCamera();
  });


  //new
  document.querySelector(".camera_icon svg").addEventListener("click", () => {
    document.querySelector(".picture_checkbox").checked = true;
    useFrontCamera = !useFrontCamera;

    const constraints = {
      video: {
        facingMode: useFrontCamera ? "user" : "environment",
      },
      audio: false,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        let camPrev = document.getElementById("camPrev"); // Make sure you have an element with id "camPrev"
        camPrev.srcObject = stream;
        camPrev.addEventListener("loadedmetadata", () => {
          camPrev.play();
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });

    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".camera_canvas_block").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  //old all
  // let useBackCamera = false;
  // document
  //   .querySelector(".change_camera")
  //   .addEventListener("click", () => {
  //     useBackCamera = !useBackCamera;
  //     startCamera();
  //   });

  // function startCamera() {
  //   const facingMode = useBackCamera ? "environment" : "user";

  //   const constraints = {
  //     video: {
  //       facingMode: { ideal: facingMode },
  //     },
  //     audio: false,
  //   };

  //   navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then((stream) => {
  //       camPrev.srcObject = stream;
  //       camPrev.addEventListener("loadedmetadata", () => {
  //         camPrev.play();
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //       alert(err.message);
  //     });

  //   document.querySelector(".overlay").classList.remove("hidden");
  //   document.querySelector(".overlay").classList.add("show");
  //   document
  //     .querySelector(".camera_canvas_block")
  //     .classList.remove("hidden");
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  // document
  //   .querySelector(".camera_icon svg")
  //   .addEventListener("click", () => {
  //     document.querySelector(".picture_checkbox").checked = true;
  //     startCamera();
  //   });

  //   let useBackCamera = false;
  // document
  //   .querySelector(".change_camera")
  //   .addEventListener("click", () => {
  //     useBackCamera = !useBackCamera;
  //     startCamera();
  //   });
  // function startCamera() {
  //   const facingMode = useBackCamera ? "environment" : "user";

  //   const constraints = {
  //     video: {
  //       facingMode: { ideal: facingMode },
  //     },
  //     audio: false,
  //   };

  //   navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then((stream) => {
  //       const camPrev = document.querySelector("#camPrev");
  //       camPrev.srcObject = stream;
  //       camPrev.addEventListener("loadedmetadata", () => {
  //         camPrev.play();
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       alert(err.message);
  //     });

  //   document.querySelector(".overlay").classList.remove("hidden");
  //   document.querySelector(".overlay").classList.add("show");
  //   document
  //     .querySelector(".camera_canvas_block")
  //     .classList.remove("hidden");
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  let useFrontCamera = true; // Default to front camera

  document.querySelector(".camera_icon svg").addEventListener("click", () => {
    document.querySelector(".picture_checkbox").checked = true;
    // const constraints = {
    //   video: {
    //     facingMode: { ideal: "environment" },
    //   },
    //   audio: false,
    // };
    mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        camPrev.srcObject = stream;
        camPrev.addEventListener("loadedmetadata", () => {
          camPrev.play();
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
    // mediaDevices
    //   .getUserMedia(constraints)
    //   .then((stream) => {
    //     camPrev.srcObject = stream;
    //     camPrev.addEventListener("loadedmetadata", () => {
    //       camPrev.play();
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     alert(err.message);
    //   });
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".camera_canvas_block").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    // startCamera();
  });