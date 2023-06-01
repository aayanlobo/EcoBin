import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};
function Grid() {
  const toast = useRef(null);
  const [rows, setRows] = useState([]);
  const [apna] = useState(getLocalItems());

  useEffect(() => {
    axios
      .get("http://localhost:8000/submitProduct")
      .then((res) => {
        setRows(res.data);
        console.log(rows);
      })
      .catch((err) => {
        console.log(err);
      });

    // loadModel();
  }, []);

  return (
    <MDBContainer fluid className="my-5">
      <Toast ref={toast} />

      <MDBRow>
        {rows.map((row, index) => (
          <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 mt-4">
            <MDBCard>
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's {row.description} Offer</p>
                <div
                  className="success rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "green",
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      axios.post("http://localhost:8000/submitBuy", {
                        useremail: apna.email,
                        description: row.description,
                        quantity: row.quantity,
                        price: row.price,
                        imageurl: row.imageurl,
                        subtotal: row.price * row.quantity,
                      });
                      toast.current.show({
                        severity: "success",
                        summary: "Success",
                        detail: "Product Added To Cart",
                        life: 3000,
                      });
                    }}
                  >
                    <ListItemIcon>
                      <h1
                        style={{
                          color: "white",
                          fontSize: "15px",
                          marginLeft: "-13px",
                          marginTop: "10px",
                        }}
                      >
                        Buy
                      </h1>
                    </ListItemIcon>
                  </ListItemButton>
                </div>
              </div>
              <MDBCardImage
                style={{
                  width: "300px",
                  height: "300px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={row.imageurl}
                position="top"
                alt="Laptop"
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      {row.additional}
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s></s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{row.description}</h5>
                  <h5 className="text-dark mb-0">{row.price}Rs</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">{row.quantity}</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Grid;
