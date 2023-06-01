import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
// import DateSelect from "./DateSelect";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function ReqCard(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8000/acceptRequest", {
        _id: props.user._id,
      })
      .then((res) => {
        alert("Request Accepted");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(selectedDate);
    const Day = selectedDate.$D;
    const Month = selectedDate.$M + 1;
    const Year = selectedDate.$y;
    console.log(Day + "/" + Month + "/" + Year);
    const existingData =
      JSON.parse(localStorage.getItem("appointMentData")) || [];
    const newData = {
      date: Day + "-" + Month + "-" + Year,
      time: "4",
      data: {
        Name: props.user.username,
        Gender: "12345678",
        Age: props.user.useremail,
        Date: "7",
        Time: "4",
        UserName: props.user.username,
        UserId: "12345678",
        EmailId: props.user.useremail,
        WasteType: props.user.wasteType,
      },
    };
    existingData.push(newData);
    localStorage.setItem("appointMentData", JSON.stringify(existingData));
  };
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        // marginLeft: "20px",
        // marginRight: "50px",
        height: "450px",
        width: "300px",
      }}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Waste Approval Request
          </Typography>

          <Typography>
            <b> UserName:</b>
            <Typography style={{ marginTop: "6px" }}>
              {props.user.username}
            </Typography>
          </Typography>
          <Typography style={{ marginTop: "5px" }}>
            <b>User Id:</b>
            <Typography style={{ marginTop: "6px" }}>
              {props.user._id}
            </Typography>
          </Typography>
          <Typography>
            <b>Email Id:</b>
            <Typography style={{ marginTop: "6px" }}>
              {props.user.useremail}
            </Typography>
          </Typography>
          <Typography>
            <b>Date:</b>
            <Typography style={{ marginTop: "6px" }}>
              {props.user.date}
            </Typography>
          </Typography>
          <Typography>
            <b>Waste Type:</b>
            <Typography style={{ marginTop: "6px" }}>
              {props.user.wasteType}
            </Typography>
          </Typography>

          {/* <DateSelect value={selectedDate} onChange={handleDateChange} /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Basic date picker"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Typography style={{ marginTop: "5px" }}>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
