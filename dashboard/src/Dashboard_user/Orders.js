import * as React from "react";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import axios from "axios";

// Generate Order Data
let index = 0;
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

// const rows = [
//   createData(
//     0,
//     "16 Mar, 2019",
//     "Elvis Presley",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   createData(
//     1,
//     "16 Mar, 2019",
//     "Paul McCartney",
//     "London, UK",
//     "VISA ⠀•••• 2574",
//     866.99
//   ),
//   createData(
//     2,
//     "16 Mar, 2019",
//     "Tom Scholz",
//     "Boston, MA",
//     "MC ⠀•••• 1253",
//     100.81
//   ),
//   createData(
//     3,
//     "16 Mar, 2019",
//     "Michael Jackson",
//     "Gary, IN",
//     "AMEX ⠀•••• 2000",
//     654.39
//   ),
//   createData(
//     4,
//     "15 Mar, 2019",
//     "Bruce Springsteen",
//     "Long Branch, NJ",
//     "VISA ⠀•••• 5919",
//     212.79
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/submitRequest")
      .then((res) => {
        setRows(res.data);
        console.log(rows);
      })
      .catch((err) => {
        console.log(err);
      });

    // loadModel();
  }, []);

  // const getRequests = async () => {
  //   );

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post("http://localhost:8000/submitRequest", {
  //       date,
  //       wasteType,
  //       credit,
  //     })
  //     .then((res) => {
  //       alert("Submitted Successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <React.Fragment>
      <div style={{ marginTop: "0px" }}>
        <Title>Recent Orders</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Type of Waste</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                {/* <TableCell>{`${new Date().getDate()}/${
                new Date().getMonth() + 1
              }/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</TableCell> */}
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.wasteType}</TableCell>
                <TableCell
                  style={{
                    backgroundColor:
                      row.status === "pending" ? "#fe2d2d" : "#45ec45",
                  }}
                >
                  {row.status}
                </TableCell>
                <TableCell align="right">{row.credit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
      </div>
    </React.Fragment>
  );
}
