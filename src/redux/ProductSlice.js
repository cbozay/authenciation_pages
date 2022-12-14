import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { productsRef } from "../config/firebase";

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (_, { getState }) => {
    await addDoc(productsRef, getState().productsss.draftProduct);
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await deleteDoc(doc(productsRef, id));
  }
);

const initialState = {
  draftProduct: {
    name: "Macbook Pro",
    description: "Lorem Ipsum",
    price: 2000,
    tags: ["apple", "mac"],
  },
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeDraftProductName: (state, action) => {
      state.draftProduct.name = action.payload;
    },
    changeDraftProductDescription: (state, action) => {
      state.draftProduct.description = action.payload;
    },
    changeDraftProductPrice: (state, action) => {
      state.draftProduct.price = action.payload;
    },
    addDraftProductTag: (state, action) => {
      state.draftProduct.tags.push(action.payload);
    },
    deleteDraftProductTag: (state, action) => {
      state.draftProduct.tags.splice(action.payload);
    },
    clearDraftProduct: (state) => {
      state.draftProduct = initialState.draftProduct;
    },
    setDraftProduct: (state, action) => {
      state.draftProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  changeDraftProductName,
  changeDraftProductDescription,
  changeDraftProductPrice,
  addDraftProductTag,
  deleteDraftProductTag,
  clearDraftProduct,
  setDraftProduct,
  setProducts,
} = productSlice.actions;

export default productSlice.reducer;
