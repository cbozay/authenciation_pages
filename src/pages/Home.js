import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const Home = () => {
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
      </Box>
    </>
  );
};

export default Home;
