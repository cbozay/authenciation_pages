import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changeName,
  changePassword,
  register,
} from "../redux/AuthSlice";
import Header from "../components/Header";

const SignIn = () => {
  const { name, email, password, error, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
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
