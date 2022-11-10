import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { signUp } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changeName,
  changePassword,
  register,
} from "../redux/AuthSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const { name, email, password, error, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };
  // useEffect(() => {
  //   signUp("Fredy Jones", "fredy@hotmail.com", "123456")
  //     .then(() => {
  //       console.log("Done!");
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
            <Button variant="outlined" onClick={() => navigate("/sign-in")}>
              SignIn
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Form Framework */}
      <Box component="form" onSubmit={handleSubmit}>
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
            SignUp
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "error.main" }}
          >
            {error ? error : ""}
          </Typography>

          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            required
            label="Full Name"
            autoFocus
            value={name}
            onChange={(e) => dispatch(changeName(e.target.value))}
          />
          <TextField
            label=" Email Address"
            type="email"
            margin="normal"
            required
            value={email}
            onChange={(e) => dispatch(changeEmail(e.target.value))}
          />
          <TextField
            label=" Password"
            type="password"
            margin="normal"
            required
            value={password}
            onChange={(e) => dispatch(changePassword(e.target.value))}
          />
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Link to="/sign-in">Already have an account? Sign In!</Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
