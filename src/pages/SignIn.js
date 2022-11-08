import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../config/firebase";

const SignIn = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   signIn("fredy@hotmail.com", "123456")
  //     .then(() => {
  //       console.log("Done");
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <>
      <CssBaseline />

      {/* Header Framework */}
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
            p: 2,
            bgcolor: "#ece9f5",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined" onClick={() => navigate("/sign-up")}>
              SignUp
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Form Framework */}
      <Box component="form">
        <Container
          maxWidth="xs"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Avatar
            sx={{
              mx: "auto",
              mt: 5,
              bgcolor: "#12005e",
              inlineSize: 50,
              blockSize: 50,
            }}
          >
            <LockPersonOutlinedIcon />
          </Avatar>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            SignIn
          </Typography>
          <TextField
            label=" Email"
            type="email"
            margin="normal"
            required
            autoFocus
            autoComplete="email"
          />
          <TextField
            label=" Password"
            type="password"
            margin="normal"
            required
          />
          <Button sx={{ mt: 3 }} variant="contained" type="submit">
            Sign In
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link>Forgot Password?</Link>
            <Link to="/sign-up">Don't have an account? Sign Up!</Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
