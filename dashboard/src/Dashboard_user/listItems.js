import * as React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import RedeemIcon from "@mui/icons-material/Redeem";
import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
const MainListItems = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleCredit = () => {
    navigate("/dashboard/credit");
  };
  const handleAnnouncement = () => {
    navigate("/announcement");
  };
  const handleBlog = () => {
    navigate("/dashboard/blogsection");
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
      <hr />
      <ListItemButton onClick={handleCredit}>
        <ListItemIcon>
          <RedeemIcon />
        </ListItemIcon>
        <ListItemText primary="Redeem" />
      </ListItemButton>
      <hr />
      <ListItemButton onClick={handleAnnouncement}>
        <ListItemIcon>
          <CampaignIcon />
        </ListItemIcon>
        <ListItemText primary="Announcement" />
      </ListItemButton>
      <hr />
      <ListItemButton onClick={handleBlog}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Blogs" />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainListItems;
