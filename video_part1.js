document.querySelector(".video_icon svg").addEventListener("click", async () => {
    // Show the overlay and video elements
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
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
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
  
        setTimeout(() => {
          if (mediaRecorder.state === 'recording') {
            stopRecording();
          }
        }, 10000);
  
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
      showVideoInBlock();
    };
  
    const showVideoInBlock = () => {
      let blob = new Blob(recordedchunks, { type: 'video/mp4' });
      let url = URL.createObjectURL(blob);
      debugger
  
      let videoTag = document.createElement("video");
      videoTag.src = url;
      videoTag.controls = true;
      videoTag.autoplay = false;
  
      document.querySelector(".gc-purchase-form-img_card_main").appendChild(videoTag);
      document.querySelector(".overlay").classList.add("hidden");
      document.querySelector(".overlay").classList.remove("show");
      document.querySelector(".video_canvas_block").classList.add("hidden");
    };
  
    // Event listeners for start and stop buttons
    startBtn.addEventListener('click', startRecording);
    stopBtn.addEventListener('click', stopRecording);
  
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });