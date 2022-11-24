import { Box } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { storage, useProductsListener } from "../config/firebase";
import { deleteProduct, addProduct } from "../redux/ProductSlice";

const Home = () => {
  const imageRef = ref(storage, "resimlerim/resimim");

  useProductsListener();

  const { products } = useSelector((state) => state.productsss);

  const dispatch = useDispatch();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => setUrl(url))
      .catch((err) => console.log(err));
  }, []);

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
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const image = e.currentTarget.files[0];

                uploadBytes(imageRef, image);
              }}
            />
          </div>
          {url && <img src={url} width={240} alt="img" />}
          <button onClick={() => dispatch(addProduct())}>+</button>
          {products.map((product, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
            >
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
