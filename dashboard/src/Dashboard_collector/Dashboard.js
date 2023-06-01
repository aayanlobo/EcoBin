import * as React from "react";
import { useState, useEffect, useCallback } from "react";
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
// import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Person3Icon from "@mui/icons-material/Person3";
import GoogleMap from "./GoogleMap";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import CalenderFinal from "../FrontPage/Home/CalenderFinal";
import ReqCard from "./ReqCard";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

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
  const [open, setOpen] = React.useState(true);
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);

  // useEffect(async () => {
  //   await axios
  //     .get("http://localhost:8000/getallrequest")
  //     .then((res) => {
  //       setUsers(res.data);
  //       console.log(users);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const getAllRequest = async () => {
    await axios
      .get("http://localhost:8000/getallrequest")
      .then((res) => {
        setUsers(res.data);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
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
              Collector Dashboard
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
          <CalenderFinal />
          {/* <div className="card flex justify-content-center"> */}
          <Button
            label="Show"
            icon="pi pi-external-link"
            onClick={() => setVisible(true)}
            style={{ height: "50px", width: "200px", marginBottom: "20px" }}
          />
          <Dialog
            header="Header"
            visible={visible}
            maximizable
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            <GoogleMap />
          </Dialog>
          {/* </div> */}
          <br />
          <div
            style={{
              display: "grid",
              gridGap: "23px 186px",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 140px))",
              maxWidth: "2000px",
              marginLeft: "20px",
            }}
          >
            {users.map((user, index) => (
              <ReqCard user={user} />
            ))}
          </div>
          <Button onClick={getAllRequest}>Get All Request</Button>
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
