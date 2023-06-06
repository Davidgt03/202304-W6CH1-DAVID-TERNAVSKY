import { actionTypes } from "./action.types";

export type PhoneAction = {
  type: string;
  payload: boolean | string;
};

export function addNumber(payload: string): PhoneAction {
  return {
    type: actionTypes.addKey,
    payload,
  };
}
