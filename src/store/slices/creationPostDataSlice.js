import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  imageList: [],
  description: "",
  finalAmount: null,
  donationLink: "",
  donationCards: "",
  email: "",
  phone: "",
};

const creationPostData = createSlice({
  name: "postData",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    addImage: (state, action) => {
      state.imageList = state.imageList.concat(action.payload);
    },
    deleteImage: (state, action) => {
      state.imageList = state.imageList.filter(
        (file) => file !== action.payload
      );
    },
    setDiscription: (state, action) => {
      state.description = action.payload;
    },
    setFinalAmount: (state, action) => {
      state.finalAmount = action.payload;
    },
    setDonationLink: (state, action) => {
      state.donationLink = action.payload;
    },
    setDonationCards: (state, action) => {
      state.donationCards = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

const { actions, reducer } = creationPostData;

export const {
  setCategory,
  addImage,
  deleteImage,
  setDiscription,
  setFinalAmount,
  setDonationLink,
  setDonationCards,
  setEmail,
  setPhone,
} = actions;

export default reducer;
