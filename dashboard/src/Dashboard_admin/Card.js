import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        {/* <Link> */}

        <Typography
          sx={{ fontSize: 14, fontWeight: "bolder", textAlign: "center" }}
          color="text.primary"
          gutterBottom
        >
          {props.row.name}
        </Typography>
        {/* </Link> */}

        <Typography
          style={{ textAlign: "center", fontWeight: "bolder" }}
          sx={{ mb: 1.5 }}
          color="text.primary"
        >
          {props.row.icon}
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            color: "blue",
          }}
          variant="h2"
          component="div"
        >
          {props.row.name === "No of Registered Users" ||
          props.row.name === "No Registered Collector"
            ? props.row.name === "No of Registered Users"
              ? props.counter
              : props.collector
            : props.row.name === "No of Product Listed"
            ? props.product
            : props.request}
        </Typography>

        <Typography variant="body2" style={{ textAlign: "center" }}>
          {props.row.des}
          <br />
          {props.row.des1}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
