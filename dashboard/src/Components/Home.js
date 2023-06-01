import React from "react";
import { useNavigate } from "react-router-dom";
import Example from "./Popadmin";
import Button from "react-bootstrap/Button";
import { truncatedNormal } from "@tensorflow/tfjs";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ marginTop: "50px", marginLeft: "227px" }}>
        <Example />
      </div>
      <div style={{ marginBottom: "50px", marginLeft: "1059px" }}>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login/Register
        </Button>
      </div>
    </div>
  );
};

export default Home;
