import { useState } from "react";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCall = () => {
    setIsCalling(true);
    handleChange();

    setTimeout(() => {
      setIsCalling(false);
    }, 5000);
  };

  const handleChange = () => {
    if (isCalling !== true) {
      return "off";
    }
    return "message";
  };

  const handleHang = () => {
    setIsCalling(false);
    setPhoneNumber("");
    handleChange();
  };

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
    handleChange,
  };
}
