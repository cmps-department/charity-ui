import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "ARMY",
  images: [],
  description: "",
  targetAmount: "",
  fullDescription: "",
  shortDescription: "",
  phone: "",
};

const postCreationSlice = createSlice({
  name: "postCreation",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    addImage: (state, action) => {
      state.images = state.images.concat(action.payload);
    },
    deleteImage: (state, action) => {
      state.images = state.images.filter(
        (file) => file !== action.payload
      );
    },
    changeImagePosition: (state, action) => {
      const { source, destination } = action.payload;
      const temp = state.images.splice(source.index, 1)[0];
      state.images.splice(destination.index, 0, temp);
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
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

const { actions, reducer } = postCreationSlice;

export const {
  setCategory,
  addImage,
  deleteImage,
  changeImagePosition,
  setDiscription,
  setFinalAmount,
  setDonationLink,
  setDonationCards,
  setPhone,
} = actions;

export default reducer;
