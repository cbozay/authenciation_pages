import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/LinkReset.css";
const Header = () => {
  const navigate = useNavigate();
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
            p: 2,
            bgcolor: "#ece9f5",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined" onClick={() => navigate("/sign-in")}>
              SignIn
            </Button>
            <Button variant="outlined" onClick={() => navigate("/sign-up")}>
              SignUp
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
