document
  .querySelector(".video_icon svg")
  .addEventListener("click", async () => {
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".video_canvas_block").classList.remove("hidden");

    let videoElement = document.getElementById("video_preview");
    let startBtn = document.getElementById("startRecording");
    let stopBtn = document.getElementById("stopRecording");
    let mediaRecorder;
    let recordedchunks = [];

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
      recordedchunks = [];
      try {
        mediaRecorder = new MediaRecorder(videoElement.srcObject);
        mediaRecorder.start();

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            recordedchunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          downloadRecording();
        };
        startBtn.disabled = true;
        stopBtn.disabled = false;
      } catch (e) {
        console.log("Error starting the recorder", e);
      }
    };

    const stopRecording = () => {
      mediaRecorder.stop();
      startBtn.disabled = false;
      stopBtn.disabled = true;
    };

    const downloadRecording = () => {
      let blob = new Blob(recordedchunks, { type: "video/mp4" });
      let url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "recording.mp4";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    };

    startBtn.addEventListener("click", startRecording);
    stopBtn.addEventListener("click", stopRecording);

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
