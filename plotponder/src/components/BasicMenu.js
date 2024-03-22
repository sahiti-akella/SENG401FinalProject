import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./BasicMenu.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { signOut } from "firebase/auth";
import { userDatabase } from "./pages/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(userDatabase).then((val) => {
      navigate("/");
    });
  };

  const handleChangePass = () => {
    navigate("/ChangePassword");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SettingsIcon style={{ color: "black" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
        <MenuItem onClick={handleChangePass}>Update Password</MenuItem>
        <MenuItem onClick={handleClose}>Delete Account</MenuItem>
      </Menu>
    </div>
  );
}
