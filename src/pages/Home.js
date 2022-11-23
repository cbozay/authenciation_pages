import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useProductsListener } from "../config/firebase";
import { deleteProduct, addProduct } from "../redux/ProductSlice";

const Home = () => {
  useProductsListener();
  const { products } = useSelector((state) => state);
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
        <div>
          <button
            sx={{
              border: "1px solid",
            }}
            onClick={() => dispatch(addProduct())}
          >
            +
          </button>
          {products.products.map((product, index) => (
            <div key={index}>
              <h2>{product.name}</h2>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
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
