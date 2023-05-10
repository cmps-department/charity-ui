import { createSlice } from "@reduxjs/toolkit";

const imagesFromBackend = [
  { id: 1, src: "../images/car1.png", alt: "car" },
  { id: 2, src: "../images/car2.png", alt: "car" },
  { id: 3, src: "../images/car3.png", alt: "car" },
];

const initialState = {
  category: "",
  imageList: imagesFromBackend,
  description: "",
  finalAmount: "",
  donationLink: "",
  donationCards: "",
  email: "",
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
      state.imageList = state.imageList.concat(action.payload);
    },
    deleteImage: (state, action) => {
      state.imageList = state.imageList.filter(
        (file) => file.id !== action.payload
      );
    },
    changeImagePosition: (state, action) => {
      const { source, destination } = action.payload;
      const temp = state.imageList.splice(source.index, 1)[0];
      state.imageList.splice(destination.index, 0, temp);
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
  setEmail,
  setPhone,
} = actions;

export default reducer;
