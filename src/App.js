import React, { useEffect, useState, useRef } from "react"
import * as faceApi from "face-api.js"
import './App.css';



function App() {
  const videoHeight = 480
  const videoWidth = 640
  const [initializing, setInitializing] = useState(false)
  const videoRef = useRef()
  const canvasRef = useRef()
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models'
      setInitializing(true)
      Promise.all([
        faceApi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceApi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceApi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceApi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceApi.nets.ageGenderNet.loadFromUri(MODEL_URL)
      ]).then(() => startVideo())
    }
    loadModels()
  }, [])
  const startVideo = () => {
    window.navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
    window.navigator.getUserMedia({ video: true,
      audio: false
    }, stream => {

      return videoRef.current.srcObject = stream
    }, err => console.log(err))
  }
  const handleVideoPlay = () => {
    canvasRef.current.innerHTML = faceApi.createCanvasFromMedia(videoRef.current);
    const displaySize = { width: videoWidth, height: videoHeight};
    faceApi.matchDimensions(canvasRef.current, displaySize);
    if (initializing) {
      setInitializing(false)
    }
     setInterval(async () => {
      const detections = await faceApi
        .detectAllFaces(videoRef.current, new faceApi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender()
        ;
      const resizedDetections = faceApi.resizeResults(detections, displaySize);
      canvasRef.current.getContext("2d").clearRect(0, 0, videoWidth, videoWidth);
      faceApi.draw.drawDetections(canvasRef.current, resizedDetections)
      faceApi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
      faceApi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
      resizedDetections.forEach( detection => {
        const box = detection.detection.box
        const drawBox = new faceApi.draw.DrawBox(box, { label: Math.round(detection.age) + " year old " + detection.gender })
        drawBox.draw(canvasRef.current)
      })
      
   
    }, 100);
    // clearInterval(interval)
  }

  // 
  // faceApi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
  // faceApi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)

return (
  <div className="App">
    <div>
      {initializing ? "Initializing" : "Ready"}
    </div>
    <div className ="flex justify-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        height={videoHeight}
        width={videoWidth}
        onPlay={handleVideoPlay}
      />
      <canvas ref={canvasRef} className="position-absolute" />
    </div>

  </div>
);
}

export default App;
