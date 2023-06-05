import { useContext } from "react";
import { Context } from "../context/context";

export function Info() {
  const {
    phoneContext: { handleChange },
  } = useContext(Context);
  const phoneNumber = 667359961;

  return (
    <>
      <span className={handleChange()}>{phoneNumber} is Calling...</span>
    </>
  );
}
