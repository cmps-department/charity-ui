import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  targetAmount: "",
  images: [],
  fullDescription: "",
  shortDescription: "",
  donationLink: "",
  phoneNumber: "",
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
    setDescription: (state, action) => {
      state.fullDescription = action.payload;
    },
    setTargetAmount: (state, action) => {
      state.targetAmount = action.payload;
    },
    setDonationLink: (state, action) => {
      state.donationLink = action.payload;
    },
    setDonationCards: (state, action) => {
      state.shortDescription = action.payload;
    },
    setPhone: (state, action) => {
      state.phoneNumber = action.payload;
    },
    clearFormData: () => initialState
  },
});

const { actions, reducer } = postCreationSlice;

export const {
  setCategory,
  addImage,
  deleteImage,
  changeImagePosition,
  setDescription,
  setTargetAmount,
  setDonationLink,
  setDonationCards,
  setPhone,
  clearFormData
} = actions;

export default reducer;
