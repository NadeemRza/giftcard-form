$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 750) {
      if (!$(".preview_cards_block").hasClass("slick-initialized")) {
        $(".preview_cards_block").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: `<span type='button' class='insta_prev_button insta_arrows'>
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27.5" stroke="#191919"/>
                <path d="M22.2502 18C22.2502 22 18.0002 28 12.0002 28C18.0002 28 22.2502 34 22.2502 38M44.002 28H12.5002" stroke="#191919" stroke-linecap="round"/>
              </svg></span>`,
          nextArrow: `<span type='button' class='insta_next_button insta_arrows'>
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27.5" stroke="#191919"/>
                <path d="M33.7518 18C33.7518 22 38.0018 28 44.0018 28C38.0018 28 33.7518 34 33.7518 38M12 28H43.5018" stroke="#191919" stroke-linecap="round"/>
              </svg></span>`,
        });
      }
    } else {
      // if ($(".preview_cards_block").hasClass("slick-initialized")) {
      //   $(".preview_cards_block").slick("unslick"); // Destroys slick on desktop
      // }
      $(".preview_cards_block").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<span type='button' class='insta_prev_button insta_arrows'>
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27.5" stroke="#191919"/>
                <path d="M22.2502 18C22.2502 22 18.0002 28 12.0002 28C18.0002 28 22.2502 34 22.2502 38M44.002 28H12.5002" stroke="#191919" stroke-linecap="round"/>
              </svg></span>`,
        nextArrow: `<span type='button' class='insta_next_button insta_arrows'>
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27.5" stroke="#191919"/>
                <path d="M33.7518 18C33.7518 22 38.0018 28 44.0018 28C38.0018 28 33.7518 34 33.7518 38M12 28H43.5018" stroke="#191919" stroke-linecap="round"/>
              </svg></span>`,
      });
    }

    $(".gc-purchase-form-content_templates").slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: `<span type='button' class='insta_prev_button insta_arrows'>
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27.5" stroke="#191919"/>
                <path d="M22.2502 18C22.2502 22 18.0002 28 12.0002 28C18.0002 28 22.2502 34 22.2502 38M44.002 28H12.5002" stroke="#191919" stroke-linecap="round"/>
              </svg></span>`,
      nextArrow: `<span type='button' class='insta_next_button insta_arrows'>
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="27.5" stroke="#191919"/>
                <path d="M33.7518 18C33.7518 22 38.0018 28 44.0018 28C38.0018 28 33.7518 34 33.7518 38M12 28H43.5018" stroke="#191919" stroke-linecap="round"/>
              </svg></span>`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }

  // Initialize Slick slider
  initializeSlick();

  // Reinitialize slick on window resize
  $(window).on("resize", function () {
    initializeSlick();
  });

  document
    .querySelector(".gc-purchase-form-preview_button")
    .addEventListener("click", () => {
      document.querySelector(".preview_checkbox").checked = true;
      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".overlay").classList.add("show");
      document.querySelector(".preview_cards_block").classList.remove("hide");
      document.querySelector(".preview_heading").classList.remove("hidden");
      document.querySelector(".sc_button_block").classList.remove("hidden");
      document.querySelector(".preview_frame_cross").classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      initializeSlick();
    });
});

document.addEventListener("DOMContentLoaded", (e) => {
  let mediaDevices = navigator.mediaDevices;
  let camPic = document.getElementById("camera_picture");
  let camPrev = document.getElementById("camera_preview");
  let camCanvas = document.getElementById("camera_canvas");

  // document.querySelector(".greeting_message").innerText =
  //   document.getElementById("cover_greeting").placeholder;
  // document.querySelector(".pc_greeting_message").innerText =
  //   document.getElementById("cover_greeting").placeholder;
  // document.querySelectorAll(".pc_greeting_message").forEach((gm) => {
  //   gm.innerText = document.getElementById("cover_greeting").placeholder;
  // });

  document.querySelector(".greeting_message").innerText = "";
  document.querySelector(".pc_greeting_message").innerText = "";
  document.querySelectorAll(".pc_greeting_message").forEach((gm) => {
    gm.innerText = "";
  });

  document.querySelector(".preview_text_frame_dear_text_span").innerText =
    document.getElementById("insider_detail").placeholder;

  document.querySelector(".preview_text_frame_insider_text").innerText =
    document.getElementById("insider_text").value;

  document.querySelector(".preview_text_frame_sign_off_text").innerText =
    document.getElementById("sign_off_text_input").placeholder;

  document.querySelector(".preview_text_from_text_input").innerText =
    document.getElementById("from_text_input").placeholder;

  document.getElementById("cover_greeting").addEventListener(
    "input",
    debounce((e) => {
      document.querySelector(".content_checkbox").checked = true;
      let mes = e.target.value;
      document.querySelector(".greeting_message").innerText = mes;
      document.querySelector(".pc_greeting_message").innerText = mes;
      document.querySelectorAll(".pc_greeting_message").forEach((gm) => {
        gm.innerText = mes;
      });
    }, 300)
  );

  document.getElementById("insider_detail").addEventListener(
    "input",
    debounce((e) => {
      document.querySelector(".content_checkbox").checked = true;
      let mes = e.target.value;
      document.querySelector(".preview_text_frame_dear_text_span").innerText =
        mes;
    }, 300)
  );

  document.getElementById("insider_text").addEventListener(
    "input",
    debounce((e) => {
      document.querySelector(".content_checkbox").checked = true;
      let mes = e.target.value;
      document.querySelector(".preview_text_frame_insider_text").innerText =
        mes;
    }, 300)
  );

  document.getElementById("sign_off_text_input").addEventListener(
    "input",
    debounce((e) => {
      document.querySelector(".content_checkbox").checked = true;
      let mes = e.target.value;
      document.querySelector(".preview_text_frame_sign_off_text").innerText =
        mes;
    }, 300)
  );

  document.getElementById("from_text_input").addEventListener(
    "input",
    debounce((e) => {
      document.querySelector(".content_checkbox").checked = true;
      let mes = e.target.value;
      document.querySelector(".preview_text_from_text_input").innerText = mes;
    }, 300)
  );

  document.querySelectorAll(".img_rat_radio").forEach((irpr) => {
    irpr.addEventListener("change", () => {
      if (irpr.checked) {
        if (irpr.value == "circle") {
          if (
            !document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.contains("circular")
          ) {
            document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.add("circular");
          }
          if (
            document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.contains("square")
          ) {
            document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.remove("square");
          }
          if (
            !document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.contains("circular")
          ) {
            document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.add("circular");
          }
          if (
            document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.contains("square")
          ) {
            document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.remove("square");
          }
        } else {
          if (
            !document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.contains("square")
          ) {
            document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.add("square");
          }
          if (
            document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.contains("circular")
          ) {
            document
              .querySelector(".gc-purchase-form-img_card_main_image")
              .classList.remove("circular");
          }
          if (
            !document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.contains("square")
          ) {
            document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.add("square");
          }
          if (
            document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.contains("circular")
          ) {
            document
              .querySelector(".pc_gc-purchase-form-img_card_main_image")
              .classList.remove("circular");
          }
        }
      }
    });
  });

  document.querySelectorAll(".img_rat_radio").forEach((irpr) => {
    if (irpr.checked) {
      if (irpr.value == "circle") {
        if (
          !document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.contains("circular")
        ) {
          document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.add("circular");
        }
        if (
          document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.contains("square")
        ) {
          document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.remove("square");
        }
      } else {
        if (
          !document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.contains("square")
        ) {
          document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.add("square");
        }
        if (
          document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.contains("circular")
        ) {
          document
            .querySelector(".gc-purchase-form-img_card_main_image")
            .classList.remove("circular");
        }
      }
    }
  });

  // function addRadioListener() {
  document.querySelectorAll(".template_radio").forEach((tr) => {
    tr.addEventListener("change", () => {
      document.querySelector(".template_checkbox").checked = true;
      document.querySelectorAll(".template_radio").forEach((tempr) => {
        if (tempr.checked) {
          // document.querySelector(
          //   ".gc-purchase-form-img_card_main img"
          // ).src = document.querySelector(
          //   ".gc_template_input_block input[type='radio']:checked + label img"
          // ).src;
          // document.querySelector(
          //   ".pc_gc-purchase-form-img_card_main img"
          // ).src = document.querySelector(
          //   ".gc_template_input_block input[type='radio']:checked + label img"
          // ).src;
          // document
          //   .querySelectorAll(".pc_gc-purchase-form-img_card_main img")
          //   .forEach((gi) => {
          //     gi.src = document.querySelector(
          //       ".gc_template_input_block input[type='radio']:checked + label img"
          //     ).src;
          //   });
          // document.querySelector(
          //   ".gc-purchase-form-img_card_main_block"
          // ).style.backgroundImage = `url(${
          //   document.querySelector(
          //     ".gc_template_input_block input[type='radio']:checked + label img"
          //   ).src
          // })`;
          document
            .querySelectorAll(".gc-purchase-form-img_card_main_block")
            .forEach((gcb) => {
              gcb.style.backgroundImage = `url(${
                document.querySelector(
                  ".gc_template_input_block input[type='radio']:checked + label img"
                ).src
              })`;
            });
          // document.querySelector(
          //   ".pc_gc-purchase-form-img_conatiner"
          // ).style.backgroundImage = `url(${
          //   document.querySelector(
          //     ".gc_template_input_block input[type='radio']:checked + label img"
          //   ).src
          // })`;
          document
            .querySelectorAll(".pc_gc-purchase-form-img_card_main_block")
            .forEach((gcb) => {
              gcb.style.backgroundImage = `url(${
                document.querySelector(
                  ".gc_template_input_block input[type='radio']:checked + label img"
                ).src
              })`;
            });
          document
            .querySelectorAll(".preview_text_frame_content")
            .forEach((gcb) => {
              gcb.style.backgroundImage = `url(${
                document.querySelector(
                  ".gc_template_input_block input[type='radio']:checked + label img"
                ).src
              })`;
            });
          document
            .querySelectorAll(".preview_frame_redeem_card")
            .forEach((gcb) => {
              gcb.style.backgroundImage = `url(${
                document.querySelector(
                  ".gc_template_input_block input[type='radio']:checked + label img"
                ).src
              })`;
            });
          // document.querySelector(
          //   ".preview_text_frame_content_block"
          // ).style.backgroundImage = `url(${
          //   document.querySelector(
          //     ".gc_template_input_block input[type='radio']:checked + label img"
          //   ).src
          // })`;
          // document
          //   .querySelectorAll(".preview_text_frame_content_block")
          //   .forEach((gcb) => {
          //     gcb.style.backgroundImage = `url(${
          //       document.querySelector(
          //         ".gc_template_input_block input[type='radio']:checked + label img"
          //       ).src
          //     })`;
          //   });
          // document.querySelector(
          //   ".preview_frame_redeem_card_block"
          // ).style.backgroundImage = `url(${
          //   document.querySelector(
          //     ".gc_template_input_block input[type='radio']:checked + label img"
          //   ).src
          // })`;
          // document
          //   .querySelectorAll(".preview_frame_redeem_card_block")
          //   .forEach((gcb) => {
          //     gcb.style.backgroundImage = `url(${
          //       document.querySelector(
          //         ".gc_template_input_block input[type='radio']:checked + label img"
          //       ).src
          //     })`;
          //   });
        }
      });
    });
  });
  // }

  document.querySelectorAll(".greeting_color_radio").forEach((cr) => {
    cr.addEventListener("change", () => {
      if (cr.checked) {
        if (cr.value == "black") {
          document.querySelector(".greeting_message").style.color = "#000";
          document.querySelector(".pc_greeting_message").style.color = "#000";
        } else {
          document.querySelector(".greeting_message").style.color = "#fff";
          document.querySelector(".pc_greeting_message").style.color = "#fff";
        }
      }
    });
  });

  document.querySelectorAll(".price_radio").forEach((pr) => {
    pr.addEventListener("change", () => {
      document.querySelector(".price_checkbox").checked = true;
      document.querySelectorAll(".price_radio").forEach((prir) => {
        if (prir.checked) {
          document.querySelector(
            ".gc-purchase-form-img_card_main_text"
          ).innerText = "$" + prir.value;
          document.querySelector(
            ".pc_gc-purchase-form-img_card_main_text"
          ).innerText = "$" + prir.value;
          document
            .querySelectorAll(".pc_gc-purchase-form-img_card_main_text")
            .forEach((pt) => {
              pt.innerText = "$" + prir.value;
            });
        }
      });
    });
  });

  // document.querySelectorAll(".price_radio").forEach((pr) => {
  //   if (pr.checked) {
  //     document.querySelector(
  //       ".gc-purchase-form-img_card_main_text"
  //     ).innerText = "$" + pr.value;
  //     document.querySelector(
  //       ".gc-purchase-form-img_card_main_text"
  //     ).innerText = "$" + pr.value;
  //     document
  //       .querySelectorAll(".pc_gc-purchase-form-img_card_main_text")
  //       .forEach((pt) => {
  //         pt.innerText = "$" + pr.value;
  //       });
  //   }
  // });

  document.querySelector(".gc-purchase-form-img_card_main_text").innerText =
    "$";
  document.querySelector(".gc-purchase-form-img_card_main_text").innerText =
    "$";
  document
    .querySelectorAll(".pc_gc-purchase-form-img_card_main_text")
    .forEach((pt) => {
      pt.innerText = "$";
    });

  function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }

  document.querySelector(".other_price").addEventListener(
    "input",
    debounce((e) => {
      let val = e.target.value;
      let customPriceRadio = document.querySelector(".custom_price_radio");
      customPriceRadio.value = val;
      customPriceRadio.checked = true;
      let event = new Event("change", { bubbles: true });
      customPriceRadio.dispatchEvent(event);
    }, 300)
  );

  // document.querySelector(
  //   ".gc-purchase-form-img_card_main_block"
  // ).style.background = "#eee";
  // document.querySelector(
  //   ".pc_gc-purchase-form-img_conatiner"
  // ).style.background = "#eee";
  // document.querySelector(".preview_text_frame_content").style.background =
  //   "#eee";
  // document.querySelector(".preview_frame_redeem_card").style.background =
  //   "#eee";
  // document.querySelector(
  //   ".pc_gc-purchase-form-img_card_main_block"
  // ).style.background = "#eee";

  // addRadioListener();

  document.querySelectorAll(".template_radio").forEach((tempr) => {
    // if (tempr.checked) {
    // document.querySelector(".gc-purchase-form-img_card_main img").src =
    //   document.querySelector(
    //     ".gc_template_input_block input[type='radio']:checked + label img"
    //   ).src;
    // document.querySelector(
    //   ".pc_gc-purchase-form-img_card_main img"
    // ).src = document.querySelector(
    //   ".gc_template_input_block input[type='radio']:checked + label img"
    // ).src;
    // document
    //   .querySelectorAll(".pc_gc-purchase-form-img_card_main img")
    //   .forEach((gi) => {
    //     gi.src = document.querySelector(
    //       ".gc_template_input_block input[type='radio']:checked + label img"
    //     ).src;
    //   });
    //     document.querySelector(
    //       ".gc-purchase-form-img_card_main_block"
    //     ).style.backgroundImage = `url(${
    //       document.querySelector(
    //         ".gc_template_input_block input[type='radio']:checked + label img"
    //       ).src
    //     })`;
    //     document.querySelector(
    //       ".pc_gc-purchase-form-img_conatiner"
    //     ).style.backgroundImage = `url(${
    //       document.querySelector(
    //         ".gc_template_input_block input[type='radio']:checked + label img"
    //       ).src
    //     })`;
    //     document.querySelector(
    //       ".preview_text_frame_content_block"
    //     ).style.backgroundImage = `url(${
    //       document.querySelector(
    //         ".gc_template_input_block input[type='radio']:checked + label img"
    //       ).src
    //     })`;
    //     document.querySelector(
    //       ".preview_frame_redeem_card_block"
    //     ).style.backgroundImage = `url(${
    //       document.querySelector(
    //         ".gc_template_input_block input[type='radio']:checked + label img"
    //       ).src
    //     })`;
    //   }
    document.querySelector(
      ".preview_text_frame_content"
    ).style.background = `url(${
      document.querySelector(
        ".gc_template_input_block input[type='radio']:checked + label img"
      ).src
    })`;
    document.querySelectorAll(".preview_frame_redeem_card").forEach((pfc) => {
      pfc.style.background = `url(${
        document.querySelector(
          ".gc_template_input_block input[type='radio']:checked + label img"
        ).src
      })`;
    });
    document.querySelector(
      ".pc_gc-purchase-form-img_card_main_block"
    ).style.background = `url(${
      document.querySelector(
        ".gc_template_input_block input[type='radio']:checked + label img"
      ).src
    })`;
  });

  document.querySelector(".sc-preview_button").addEventListener("click", () => {
    // document
    //   .querySelector(".sc-preview_button")
    //   .classList.add("hidden");
    // document
    //   .querySelector(".final_step_blocks")
    //   .classList.remove("hidden");
    // document.querySelector(".final_step_blocks").classList.add("show");
    // document
    //   .querySelector(".preview_cards_block")
    //   .classList.add("hide");
    // document
    //   .querySelector(".preview_frame_cross")
    //   .classList.add("hidden");
    // document.querySelector(".preview_heading").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".preview_cards_block").classList.add("hide");
    document.querySelector(".preview_heading").classList.add("hidden");
    document.querySelector(".sc_button_block").classList.add("hidden");
    document.querySelector(".preview_frame_cross").classList.add("hidden");
    if (
      !document.querySelector(".final_step_blocks").classList.contains("hidden")
    ) {
      document.querySelector(".final_step_blocks").classList.add("hidden");
    }
  });

  document
    .querySelector(".preview_frame_cross")
    .addEventListener("click", () => {
      document.querySelector(".overlay").classList.add("hidden");
      document.querySelector(".overlay").classList.remove("show");
      document.querySelector(".preview_cards_block").classList.add("hide");
      document.querySelector(".preview_heading").classList.add("hidden");
      document.querySelector(".sc_button_block").classList.add("hidden");
      document.querySelector(".preview_frame_cross").classList.add("hidden");
      if (
        !document
          .querySelector(".final_step_blocks")
          .classList.contains("hidden")
      ) {
        document.querySelector(".final_step_blocks").classList.add("hidden");
      }
    });

  let useFrontCamera = true; // Default to front camera

  function startCamera() {
    // const constraints = {
    //   video: {
    //     facingMode: useFrontCamera ? "user" : "environment", // Toggle between front and rear camera
    //   },
    //   audio: false,
    // };
    const constraints = {
      video: {
        facingMode: { ideal: useFrontCamera ? "user" : "environment" },
      },
      audio: false,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        camPrev.srcObject = stream; // Set the stream to the video element
        camPrev.addEventListener("loadedmetadata", () => {
          camPrev.play();
        });
      })
      .catch((err) => {
        if (err.name === "NotAllowedError") {
          alert("Camera access was denied. Please grant permissions.");
        } else {
          alert(`Error accessing the camera: ${err.message}`);
        }
        // console.log(err.message);
        // alert(err.message);
      });
  }

  document.querySelector(".camera_icon svg").addEventListener("click", () => {
    debugger;
    document.querySelector(".picture_checkbox").checked = true;
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".camera_canvas_block").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // startCamera();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      startCamera();
    } else {
      alert("Camera not supported on this device.");
    }
  });

  document.querySelector(".change_camera").addEventListener("click", () => {
    useFrontCamera = !useFrontCamera;
    startCamera();
  });

  // window.onload = onPageLoad;

  document
    .querySelector(".video_icon svg")
    .addEventListener("click", async () => {
      document.querySelector(".picture_checkbox").checked = true;
      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".overlay").classList.add("show");
      document.querySelector(".video_canvas_block").classList.remove("hidden");

      let videoElement = document.getElementById("video_preview");
      let startBtn = document.getElementById("startRecording");
      let stopBtn = document.getElementById("stopRecording");
      let mediaRecorder;
      let recordedChunks = [];

      const onPageLoad = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
          videoElement.srcObject = stream;
          videoElement.addEventListener("loadedmetadata", () => {
            videoElement.play();
          });
        } catch (e) {
          console.log("Error accessing the webcam", e);
        }
      };

      await onPageLoad();

      const startRecording = async () => {
        recordedChunks = [];
        try {
          mediaRecorder = new MediaRecorder(videoElement.srcObject);
          mediaRecorder.start();

          mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              recordedChunks.push(e.data);
            }
          };

          mediaRecorder.onstop = () => {
            appendVideo();
          };

          startBtn.disabled = true;
          stopBtn.disabled = false;

          setTimeout(() => {
            stopRecording();
          }, 10000);
        } catch (e) {
          console.log("Error starting the recorder", e);
        }
      };

      const stopRecording = () => {
        mediaRecorder.stop();
        startBtn.disabled = false;
        stopBtn.disabled = true;
      };

      const appendVideo = () => {
        let blob = new Blob(recordedChunks, { type: "video/mp4" });
        let url = URL.createObjectURL(blob);

        let video = document.createElement("video");
        video.src = url;
        video.classList.add("gc-purchase-form-video");
        video.autoplay = true;
        video.loop = true;

        let targetElement = document.querySelector(
          ".gc-purchase-form-img_card_main"
        );
        targetElement.appendChild(video);

        let videoClone = video.cloneNode(true);
        let targetElement1 = document.querySelector(
          ".pc_gc-purchase-form-img_card_main"
        );
        targetElement1.appendChild(videoClone);

        document.querySelector(".overlay").classList.add("hidden");
        document.querySelector(".overlay").classList.remove("show");
        document.querySelector(".video_canvas_block").classList.add("hidden");
      };

      startBtn.addEventListener("click", startRecording);
      stopBtn.addEventListener("click", stopRecording);

      window.scrollTo({ top: 0, behavior: "smooth" });
    });

  document
    .querySelector(".file_input")
    .addEventListener("change", function (event) {
      let file = event.target.files[0];
      if (file && file.type === "image/heic") {
        heic2any({
          blob: file,
          toType: "image/jpeg",
        })
          .then((convertedBlob) => {
            let imgSrc = URL.createObjectURL(convertedBlob);
            document.querySelector(
              ".pc_gc-purchase-form-img_card_main img"
            ).src = imgSrc;
          })
          .catch((error) => console.log("Error converting HEIC file:", error));
      }
      if (file && file.type.startsWith("image/")) {
        let reader = new FileReader();

        reader.onload = function (e) {
          let imgSrc = e.target.result;
          document.querySelector(".gc-purchase-form-img_card_main img").src =
            imgSrc;
          document.querySelector(".pc_gc-purchase-form-img_card_main img").src =
            imgSrc;
        };

        reader.readAsDataURL(file);
      }
    });

  document.getElementById("capture_button").addEventListener("click", () => {
    let context = camCanvas.getContext("2d");
    camCanvas.width = camPrev.videoWidth;
    camCanvas.height = camPrev.videoHeight;
    context.drawImage(camPrev, 0, 0, camCanvas.width, camCanvas.height);

    // Create an image element from the canvas
    let img = document.createElement("img");
    img.src = camCanvas.toDataURL("image/png");
    camPic.innerHTML = "";
    camPic.appendChild(img);
    document.querySelector(".gc-purchase-form-img_card_main img").src = img.src;
    document.querySelector(".pc_gc-purchase-form-img_card_main img").src =
      img.src;

    document.querySelector(".camera_canvas_block").classList.add("hidden");
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".overlay").classList.add("hidden");
  });
});

document
  .querySelector(".gc-purchase-form-reset_button")
  .addEventListener("click", () => {
    document.querySelectorAll(".steps_checkbox").forEach((cb) => {
      if (cb.checked) {
        cb.checked = false;
      }
    });
    document.querySelectorAll(".img_rat_radio")[0].click();
    document.querySelectorAll(".price_radio")[0].checked = true;
    document.querySelectorAll(".greeting_color_radio")[0].checked = true;
    document.getElementById("cover_greeting").value = "";
    document.querySelector(".pc_greeting_message").innerText = "";
    document.querySelector(".pc_gc-purchase-form-img_card_main_image").src = "";

    document.querySelector(
      ".pc_gc-purchase-form-img_card_main_block"
    ).style.background = `url(${
      document.querySelector(
        ".gc_template_input_block input[type='radio']:checked + label img"
      ).src
    })`;

    let vidEle = document.querySelectorAll(".gc-purchase-form-video")[1];
    if (vidEle) {
      if (vidEle.srcObject) {
        const tracks = vidEle.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
      vidEle.srcObject = null;
      vidEle.pause();
      vidEle.removeAttribute("src");
      vidEle.load();
    }

    document.getElementById("insider_detail").value = "";
    document.querySelector(".preview_text_frame_dear_text_span").innerText =
      "Dear Mom";
    document.getElementById("insider_text").value =
      "You sacrified to take care of us. We appreciate you.";
    document.querySelector(".preview_text_frame_insider_text").innerText =
      "You sacrified to take care of us. We appreciate you.";
    document.getElementById("sign_off_text_input").value = "";
    document.querySelector(".preview_text_frame_sign_off_text").innerText =
      "Love";
    document.getElementById("from_text_input").value = "";
    document.querySelector(".preview_text_from_text_input").innerText =
      "Sally & Molly";
    document.querySelectorAll(".preview_text_frame_content").forEach((st) => {
      st.style.background = `url(${
        document.querySelector(
          ".gc_template_input_block input[type='radio']:checked + label img"
        ).src
      })`;
    });
    // document.querySelectorAll(".preview_frame_redeem_card").forEach((st) => {
    //   st.style.background = `url(${
    //     document.querySelector(
    //       ".gc_template_input_block input[type='radio']:checked + label img"
    //     ).src
    //   })`;
    // });
    // document.querySelectorAll(".preview_frame_redeem_card").forEach((st) => {
    //   st.style.background = `url(${
    //     document.querySelector(
    //       ".gc_template_input_block input[type='radio']:checked + label img"
    //     ).src
    //   })`;
    // });
    // document
    //   .querySelectorAll(".pc_gc-purchase-form-img_card_main_block")
    //   .forEach((st) => {
    //     st.style.background = `url(${
    //       document.querySelector(
    //         ".gc_template_input_block input[type='radio']:checked + label img"
    //       ).src
    //     })`;
    //   });

    document.getElementById("label_default").click();
  });
