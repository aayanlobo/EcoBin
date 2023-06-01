import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import axios from "axios";
import "./ML.css";
let model;
const classes = [
  "Aluminium/Recyclable",
  "Recyclable",
  "Glass/Recyclable",
  "Organic",
  "Plastics/Recyclable",
  "Recyclable",
  "Other Plastic/Recyclable",
  "Recyclable",
  "Wood/Non-recyclable",
];
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};
const ML = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [rows, setRows] = useState(getLocalItems());
  const [user, setUser] = useState("");
  const [prediction, setPrediction] = useState(
    "The model is loading, please don't press predict button until button becomes green"
  );
  const [image, setImage] = useState(null);
  const [wasteType, setWasteType] = useState("");
  const [credit, setCredit] = useState("");
  const [date, setDate] = useState("");
  //   setWasteType("Organic");
  //   setCredit("2");
  //   setDate("1/2/2023");

  const canvasRef = React.useRef(null);

  let objectDate = new Date();
  let day = objectDate.getDate();
  // console.log(day); // 23

  let month = objectDate.getMonth();
  // console.log(month + 1); // 8

  let year = objectDate.getFullYear();
  // console.log(year); // 2022
  let hours = objectDate.getHours();
  let minutes = objectDate.getMinutes();
  let seconds = objectDate.getSeconds();

  let format2 =
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    seconds +
    ":" +
    minutes +
    ":" +
    hours;
  // useEffect(() => {}, []);
  useEffect(() => {
    const loadModel = async () => {
      await axios
        .post("http://localhost:8000/getUser", {
          email: rows.email,
        })
        .then((res) => {
          setUser(res.data);
          console.log(user.username);
        });
      console.log("Loading model");

      model = await tf.loadGraphModel(
        "https://wasteclassificationwebsite.cardstdani.repl.co/WasteClassificationModelJS/model.json"
      );

      console.log("Model loaded");
      setModelLoaded(true);

      const predictBtn = document.getElementById("predictButton");
      predictBtn.className = "center-text btn btn-lg btn-success rounded-5";
      predictBtn.style.backgroundColor = "#48e073";

      setPrediction(
        "The model has been successfully loaded. Please choose an image."
      );
    };

    loadModel();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/submitRequest", {
        date: format2,
        wasteType: prediction.substring(18),
        credit: 2,
        useremail: rows.email,
        username: user.username,
      })
      .then((res) => {
        console.log(rows.email);
        console.log(rows.username);
        alert("Submitted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const img = new Image();

    img.onload = () => {
      setImage(img);
    };

    img.src = URL.createObjectURL(file);
  };

  const predict = async () => {
    if (!modelLoaded) {
      alert("The model hasn't loaded yet.");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // canvas.width = image.width;
    // canvas.height = image.height;
    var hRatio = canvas.width / image.width;
    var vRatio = canvas.height / image.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - image.width * ratio) / 2;
    var centerShift_y = (canvas.height - image.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerShift_x,
      centerShift_y,
      image.width * ratio,
      image.height * ratio
    );
    // ctx.drawImage(image, 0, 0, image.width, image.height);

    const canvasImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const tensor = tf.browser.fromPixels(canvasImage);
    const resized = tf.image
      .resizeNearestNeighbor(tensor, [256, 256])
      .toFloat();
    const batched = resized.expandDims(0);
    const predictions = (await model.predict(batched).data()).slice();

    console.log(predictions);

    const index = predictions.indexOf(Math.max.apply(null, predictions));
    setPrediction(`Predicted Result: ${classes[index]}`);
  };

  return (
    <div>
      <div
      // id="modelDiv"
      // style={{
      //   backgroundColor: "#295a46",
      //   backgroundPosition: "center center",
      //   textAlign: "center",
      // }}
      // className="responsive-width"
      >
        <h1
        //   className="display-4 bold white-color"
        //   style={{
        //     color: "#ffffff",
        //     lineHeight: "90%",
        //     fontSize: "5rem",
        //     paddingTop: "8.75rem",
        //   }}
        >
          ML Waste
        </h1>
        <canvas
          //   id="canvas"
          //   style={{
          //     // border: "3px solid #48e073",
          //     marginTop: "-50px",
          //     width: "400px",
          //     height: "200px",
          //     objectFit: "fill",
          //   }}
          ref={canvasRef}
        ></canvas>
      </div>

      <div
      // style={{
      //   backgroundColor: "#295a46",
      //   backgroundPosition: "center center",
      //   textAlign: "center",
      // }}
      // className="responsive-width"
      >
        <input
          type="file"
          //   id="inputFile"
          //   style={{ marginTop: "40px", color: "#ffffff" }}
          onChange={handleFileInputChange}
        />
        <button
          id="predictButton"
          type="button"
          className="center-text point"
          onClick={predict}
          // disabled={!isModelLoaded || !selectedFile}
        >
          Upload/Predict
        </button>
      </div>
      <div
      // style={{
      //   backgroundColor: "#295a46",
      //   backgroundPosition: "center center",
      //   textAlign: "center",
      //   marginBottom: "0rem",
      // }}
      // className="responsive-width"
      >
        <label
        //   id="predictionLabel"
        //   style={{
        //     marginTop: "2.5rem",
        //     marginBottom: "8.75rem",
        //     fontSize: "40px",
        //   }}
        //   className="lead pb-5 bold white-color"
        >
          {prediction}
        </label>
        <label>{setPrediction}</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ML;
