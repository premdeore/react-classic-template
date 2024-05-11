import { APIResponse } from "../types/api";

//Initial state for Providers API response
export const APIResponseInitialState: APIResponse = {
  errors: {
    postError: false,
    employmentUpdateError: false,
    BasicDetailsUpdateError: false,
    contactUpdateError: false,
    availabilityError: false,
    listError: false,
  },
  success: {
    postSuccess: false,
    updateSuccess: false,
    contactUpdateSuccess: false,
    availabilitySuccess: false,
    listSuccess: false,
    BasicDetailsUpdateSuccess: false,
  },
  pending: {
    postPending: false,
    BasicDetailsUpdatePending: false,
    employmentUpdatePending: false,
    contactUpdatePending: false,
    availabilityPending: false,
    listPending: false,
  },

  messages: {
    postMessage: "",
    updateMessage: "",
    deleteMessage: "",
    listMessage: "",
  },
};
