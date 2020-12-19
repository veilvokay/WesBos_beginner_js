// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
// console.log(video, canvas, faceCanvas, faceDetector);

// Write a function that will populate users video
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height: 720 }
        // video: true,
    });
    video.srcObject = stream;
    await video.play();
    // size the canvases t be the same size as the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

async function detect() {
    const faces = await faceDetector.detect(video)
    console.log(faces);
}

// 00:23:00
// populateVideo().then(detect);
