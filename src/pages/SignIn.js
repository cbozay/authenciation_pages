import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword, logIn } from "../redux/AuthSlice";
import Header from "../components/Header";

const SignIn = () => {
  const { email, password, error, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <>
      {/* Header Framework */}
      <Header />

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
            SignIn
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "error.main" }}
          >
            {error ? error : ""}
          </Typography>
          <TextField
            label=" Email"
            type="email"
            margin="normal"
            required
            autoFocus
            value={email}
            onChange={(e) => {
              dispatch(changeEmail(e.target.value));
            }}
          />
          <TextField
            label=" Password"
            type="password"
            margin="normal"
            required
            value={password}
            onChange={(e) => {
              dispatch(changePassword(e.target.value));
            }}
          />
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/sign-up">Don't have an account? Sign Up!</Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
