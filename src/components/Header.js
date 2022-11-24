import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/LinkReset.css";
import AuthHook, { useCurrentUser } from "../config/AuthHook";
import { logOut } from "../redux/AuthSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = AuthHook();
  const user = useCurrentUser();

  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfile, setShowProfile] = useState(null);
  const [showLogOut, setShowLogOut] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
    setShowProfile(null);
    setShowLogOut(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          border: "2px solid #fff",
          borderRadius: "5px",
          m: 1,

          bgcolor: "#ece9f5",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            ml: 2,
            textShadow: "25px 15px 7px rgba(150, 150, 150, 1)",
          }}
        >
          <Link className="linkReset" to="/">
            Authenciation
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 1,
            bgcolor: "#ece9f5",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            {isLoggedIn ? (
              <>
                <IconButton
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  color="inherit"
                >
                  <AccountBoxIcon sx={{ fontSize: "40px" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={(e) => {
                      setShowProfile(e.currentTarget);
                      setAnchorEl(null);
                    }}
                  >
                    My Account
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      setShowLogOut(e.currentTarget);
                      setAnchorEl(null);
                    }}
                  >
                    Log Out
                  </MenuItem>
                </Menu>
                <Dialog open={Boolean(showProfile)} onClose={handleClose}>
                  <DialogTitle>My Profile</DialogTitle>

                  <DialogContent dividers>
                    <Box display="flex" alignItems="center">
                      <Avatar />
                      <Box ml={3}>
                        <Typography>{user.name}</Typography>
                        <Typography>{user.email}</Typography>
                      </Box>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>

                <Dialog open={Boolean(showLogOut)} onClose={handleClose}>
                  <DialogContent>
                    <DialogContentText fontSize={20} color="inherit">
                      Are you sure to be LogOut?
                    </DialogContentText>
                    <DialogActions>
                      <Box mx={"auto"}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button
                          color="error"
                          onClick={() => {
                            setAnchorEl(null);
                            dispatch(logOut());
                          }}
                        >
                          LogOut
                        </Button>
                      </Box>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
              </>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

// <Button variant="outlined" onClick={() => dispatch(logOut())}>
//   Log Out
// </Button>
export default Header;
