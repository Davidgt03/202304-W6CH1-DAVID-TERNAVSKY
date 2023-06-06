import { useReducer, useState } from "react";
import { phoneState, phoneReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";

// export function useCharacters() {
//   const initialState: PhoneState = {

//   };

//   const [isCalling, setIsCalling] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [PhoneState, dispatch] = useReducer(phoneReducer, initialState);

//   const handleCall = () => {
//     setIsCalling(true);
//     handleChange();

//     setTimeout(() => {
//       setIsCalling(false);
//     }, 5000);
//   };

//   const handleChange = () => {
//     if (isCalling !== true) {
//       return "off";
//     }
//     return "message";
//   };

//   const handleHang = () => {
//     setIsCalling(false);
//     setPhoneNumber("");
//     handleChange();
//   };

//   return {
//     isCalling,
//     phoneNumber,
//     handleCall,
//     handleHang,
//     handleChange,
//   };
// }

export function usePhone() {
  const initialState: phoneState = {
    phoneNumber: "",
    calling: false,
  };

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  function handleAddKey(value: string) {
    if (phoneState.phoneNumber.length < 9) {
      dispatch(ac.addNumber(value));
    }
  }

  return {
    handleAddKey,
  };
}
