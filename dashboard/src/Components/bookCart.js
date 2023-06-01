import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PaperCart from "./PaperCart";
import axios from "axios";
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};

function OffCanvasExample({ name, ...props }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const [apna] = useState(getLocalItems());

  useEffect(() => {
    axios
      .post("http://localhost:8000/getCartItem", {
        useremail: apna.email,
      })
      .then((res) => {
        setRows(res.data);
        console.log(rows);
      })
      .catch((err) => {
        console.log(err);
      });

    // loadModel();
  }, [rows]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    navigate("/placed");
  };

  return (
    <>
      {/* <Button onClick={handleShow} className="me-2">
        <ShoppingCartIcon />
      </Button> */}
      <ListItemButton onClick={handleShow}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItemButton>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              height: "30px",
              width: "30px",
              marginLeft: "160px",
              fontSize: "25px",
              fontWeight: "bolder",
            }}
          >
            Cart
          </div>
          {rows.map((row) => (
            <PaperCart
              imageurl={row.imageurl}
              price={row.price}
              saman={row.description}
            />
          ))}
          <Button
            onClick={handleClick}
            variant="outlined"
            style={{ color: "black", backgroundColor: "green", width: "360px" }}
          >
            Place Order
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
