import * as React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems from "./listItems";
import { Toast } from "primereact/toast";
import { storage } from "../firebase";
import axios from "axios";

import BasicCard from "./Card";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Person3Icon from "@mui/icons-material/Person3";
import UserList from "./UserList";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import { OverviewLatestOrders } from "./OverviewLatestOrders";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
let success = false;

const CardDetails = [
  {
    name: "No of Registered Users",
    icon: <GroupAddIcon />,
    count: "25",
    des: "Number of people",
    des1: "registered as user ",
  },
  {
    name: "No Registered Collector",
    icon: <RememberMeIcon />,
    count: "50",
    des: "Number of people",
    des1: "registered as Collector",
  },
  {
    name: "No of Product Listed",
    icon: <FormatListNumberedIcon />,
    count: "14",
    des: "No of useful",
    des1: "products By Admin",
  },
  {
    name: "No of Request For Waste",
    icon: <Person3Icon />,
    count: "23",
    des: "Number of request",
    des1: "for waste pickup",
  },
];
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const toast = useRef(null);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [additional, setAdditional] = useState();
  const [imageurl, imageSetUrl] = useState("");
  const [counter, setCounter] = useState();
  const [collector, setCollector] = useState();
  const [product, setProduct] = useState();
  const [request, setRequest] = useState();
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/statitics")
  //     .then((res) => setCounter(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/collector")
  //     .then((res) => setCollector(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/totalproduct")
  //     .then((res) => setProduct(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/totalRequest")
  //     .then((res) => setRequest(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const fetchCounter = useCallback(() => {
    axios
      .get("http://localhost:8000/statitics")
      .then((res) => setCounter(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchCollector = useCallback(() => {
    axios
      .get("http://localhost:8000/collector")
      .then((res) => setCollector(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchProduct = useCallback(() => {
    axios
      .get("http://localhost:8000/totalproduct")
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchRequest = useCallback(() => {
    axios
      .get("http://localhost:8000/totalRequest")
      .then((res) => setRequest(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchCounter();
    fetchCollector();
    fetchProduct();
    fetchRequest();
  }, [fetchCounter, fetchCollector, fetchProduct, fetchRequest]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/submitProduct", {
        description: description,
        quantity: quantity,
        price: price,
        imageurl: imageurl,
        additional: additional,
      })
      .then((res) => {
        // alert("Submitted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Product Added Successfully",
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload File");
    }
    console.log("Abhiram");
    console.log(file);
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          imageSetUrl(url);
        });
      }
    );
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "220px",

              marginTop: "10px",
            }}
          >
            {CardDetails.map((details, index) => (
              <div
                style={{
                  height: "200px",
                  width: "250px",
                  marginRight: "-30px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <BasicCard
                  row={details}
                  counter={counter}
                  collector={collector}
                  product={product}
                  request={request}
                />
              </div>
            ))}
          </div>

          <Container
            // maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
            style={{
              width: "3000px",
              marginLeft: "90px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid style={{ marginRight: "-272px" }} container spacing={3}>
              <Grid
                item
                xs={12}
                md={4}
                lg={8}
                style={{ marginLeft: "-46px", width: "200px" }}
              >
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 600,
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <MDBInput
                      wrapperClass="mb-4"
                      id="form6Example3"
                      label="Product Description"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      id="form6Example3"
                      label="Product Quantity"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      id="form6Example3"
                      label="Price of Product"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />

                    <input
                      type="file"
                      accept="/image/*"
                      onChange={handleChange}
                      label="Product Image"
                    ></input>
                    <br />
                    <br />
                    <MDBBtn onClick={handleUpload}>Upload Image</MDBBtn>
                    <p>{percent} "% done"</p>
                    <br />
                    <br />
                    <MDBInput
                      wrapperClass="mb-4"
                      textarea
                      id="form6Example7"
                      rows={4}
                      label="Additional information"
                      value={additional}
                      onChange={(e) => {
                        setAdditional(e.target.value);
                      }}
                    />

                    <MDBBtn className="mb-4" type="submit" block>
                      Submit
                    </MDBBtn>
                  </form>
                </Paper>
              </Grid>
            </Grid>
            <UserList />
            <Toast ref={toast}></Toast>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
          <OverviewLatestOrders />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard_admin() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  return <DashboardContent />;
}
