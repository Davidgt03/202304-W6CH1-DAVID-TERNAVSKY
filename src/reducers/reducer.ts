import { PhoneAction } from "./actions.creator";
import { actionTypes } from "./action.types";

export type phoneState = {
  phoneNumber: string;
  calling: boolean;
};

export const phoneReducer = (state: phoneState, action: PhoneAction) => {
  let payload: string;
  switch (action.type) {
    case actionTypes.addKey:
      payload = action.payload as string;
      return { ...state, phoneNumber: state.phoneNumber + payload };

    default:
      return { ...state };
  }
};
