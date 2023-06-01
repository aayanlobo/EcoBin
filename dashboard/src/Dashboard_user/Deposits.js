import * as React from "react";
import Link from "@mui/material/Link";
import ML from "../FrontPage/ML model/ML";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      {/* <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
      <label>Try ML Modal To Segregate Waste</label>
      {/* <input
        style={{ width: "10rem", marginLeft: "282px" }}
        type="file"
        name="imageStyle"
      />
      <button
        style={{
          width: "6rem",
          marginLeft: "317px",
          marginTop: "13px",
          backgroundColor: "green",
        }}
      >
        Upload
      </button> */}
      <Button
        style={{
          width: "6rem",

          marginLeft: "270px",
          marginTop: "60px",
        }}
        onClick={handleOpen}
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography>Predict</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <ML />
          </Typography> */}
          <div style={{ width: "fitContent" }}>
            <ML />
          </div>
        </Box>
      </Modal>
      {/* <button
        style={{
          width: "6rem",
          marginLeft: "317px",
          marginTop: "13px",
          backgroundColor: "yellow",
        }}
      >
        Submit
      </button> */}
    </React.Fragment>
  );
}
