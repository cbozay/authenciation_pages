import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { logOut } from "../redux/AuthSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>ALL CONTENT</h1>
        <Button onClick={() => dispatch(logOut())}>Log Out</Button>
      </Box>
    </>
  );
};

export default Home;
