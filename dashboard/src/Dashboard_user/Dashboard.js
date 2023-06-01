import * as React from "react";
import { useState, useEffect } from "react";
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
// import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import BarGraph from "./BarGraph";
import SimpleLine from "./SimpleLine";
import { SparseFillEmptyRows } from "@tensorflow/tfjs";
import axios from "axios";
import ApprovedOrders from "./ApprovedOrders";

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
        Abhiram Tripathi
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
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [rows, setRows] = useState(getLocalItems());

  const toggleDrawer = () => {
    setOpen(!open);
  };

  axios
    .post("http://localhost:8000/details", {
      email: rows.email,
    })
    .then((res) => {
      setRows(res.data);
      console.log(rows);
    })
    .catch((err) => {
      console.log(err);
    });

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
              {rows.username} Dashboard
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "300px",
                }}
              >
                <Grid item xs={12} md={4} lg={12}>
                  <BarGraph />
                </Grid>

                {/* Recent Deposits */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={8}
                    style={{ marginLeft: "198px", marginBottom: "10px" }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: "257px",
                        width: "674px",
                        marginLeft: "-173px",
                      }}
                    >
                      <Deposits />
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={8}
                    style={{
                      marginLeft: "25px",
                      marginBottom: "10px",
                      height: "200px",
                      width: "985px",
                    }}
                  >
                    <div style={{ height: "260px" }}>
                      <SimpleLine />
                    </div>
                  </Grid>
                  {/* <div
                    style={{
                      height: "400px",
                      width: "400px",
                      marginLeft: "10px",
                    }}
                  > */}
                  {/* <Grid
                      item
                      xs={12}
                      md={4}
                      lg={8}
                      style={{ marginLeft: "198px" }}
                    > */}
                  {/* <SimpleLine /> */}
                  {/* </Grid> */}
                  {/* </div> */}
                </div>
              </div>

              {/* Recent Orders */}
              <div style={{ marignTop: "-120px", width: "1900px" }}>
                <Grid item xs={12} style={{ marginTop: "-280px" }}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                  </Paper>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={8}>
              <div style={{ width: "100px" }}>
                <ApprovedOrders />
              </div>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
