import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import {
  useProductsListener,
  deleteProduct,
  addProduct,
} from "../config/firebase";

const Home = () => {
  const products = useProductsListener();

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <button
            sx={{
              border: "1px solid",
            }}
            onClick={() => addProduct()}
          >
            +
          </button>
          {products.map((product, index) => (
            <div key={index}>
              <h2>{product.name}</h2>
              <button
                onClick={() => {
                  deleteProduct(product.id);
                }}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Home;
