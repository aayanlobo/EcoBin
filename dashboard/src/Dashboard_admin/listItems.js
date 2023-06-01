import * as React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LogoutIcon from "@mui/icons-material/Logout";

const MainListItems = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handlePost = () => {
    navigate("/dashboard_admin/postblog");
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
      <ListItemButton onClick={handlePost}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Post Blog" />
      </ListItemButton>
    </React.Fragment>
  );
};
export default MainListItems;

// export const SecondaryListItems = () => {
//   return (
//     <React.Fragment>
//       <ListSubheader component="div" inset>
//         Saved reports
//       </ListSubheader>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Current month" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Last quarter" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Year-end sale" />
//       </ListItemButton>
//     </React.Fragment>
//   );
// };
