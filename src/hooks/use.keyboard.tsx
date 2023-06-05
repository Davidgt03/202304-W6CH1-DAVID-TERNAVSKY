import React from "react";

export function usePhoneNumber() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const addNumber = (number: string) => {
    if (phoneNumber.length < 9) {
      setPhoneNumber((prevNumber) => prevNumber + number);
    }
  };

  const deleteNumber = () => {
    setPhoneNumber((prevNumber) => prevNumber.slice(0, -1));
  };

  const clearNumber = () => {
    setPhoneNumber("");
  };

  return {
    phoneNumber,
    addNumber,
    deleteNumber,
    clearNumber,
  };
}
