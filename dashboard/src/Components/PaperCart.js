import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "../Assets/AbhiramResumePhoto.png";
// import IncDecCounter from "./IncDecCounter";
import { useState, createContext, useContext } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};
export default function PaperCart(props) {
  const [num, setNum] = useState(0);
  const [apna] = useState(getLocalItems());

  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
    console.log(num);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 350,
          height: 128,
        },
      }}
    >
      {/* <div
        style={{
          height: "30px",
          width: "30px",
          marginLeft: "160px",
          fontSize: "25px",
          fontWeight: "bolder",
        }}
      >
        Cart
      </div> */}
      <Paper elevation={3}>
        <img
          style={{
            width: "100px",
            height: "100px",
            marginTop: "14px",
            marginLeft: "10px",
          }}
          src={props.imageurl}
          alt="Image"
        ></img>
        <div
          style={{
            marginLeft: "150px",
            marginTop: "-100px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <IncDecCounter /> */}

          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={decNum}
            style={{ width: "30px" }}
          >
            -
          </button>

          <input
            type="number"
            class="form-control"
            value={num}
            onChange={handleChange}
            style={{ width: "60px" }}
          />

          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={incNum}
            style={{ width: "30px" }}
          >
            +
          </button>
        </div>
        <div
          style={{
            width: "10px",
            height: "10px",
            marginLeft: "160px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h1 style={{ fontSize: "20px", marginRight: "50px" }}>
            {props.saman.substr(0, 5)}
          </h1>
          <h1 style={{ fontSize: "20px" }}>{props.price}Rs</h1>
        </div>
        <div
          style={{
            maxWidth: "10px",
            height: "10px",
            marginLeft: "180px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h1 style={{ fontSize: "15px" }}>Subtotal:{props.price * num}Rs</h1>
          <div
            style={{ marginLeft: "15px", marginTop: "-10px", color: "black" }}
          >
            <ListItemButton
              onClick={() => {
                axios
                  .post("http://localhost:8000/deleteCart", {
                    useremail: apna.email,
                    saman: props.saman,
                  })
                  .then((res) => {
                    // alert("Item Deleted");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
            </ListItemButton>
          </div>
        </div>
      </Paper>
      {/* <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} /> */}
    </Box>
  );
}
