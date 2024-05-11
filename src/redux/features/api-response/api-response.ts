import { createSlice } from "@reduxjs/toolkit";

interface RP {
  success: boolean;
  error: boolean;
  pending: boolean;
  message: string;
}

const initialState: RP = {
  success: false,
  error: false,
  pending: false,
  message: "",
};

const responseSlice = createSlice({
  name: "responseSlice",
  initialState: initialState,
  reducers: {
    setResponseValue: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { setResponseValue } = responseSlice.actions;

export default responseSlice;
