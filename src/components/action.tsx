import { useContext } from "react";
import { Context } from "../context/context";

export function Action() {
  const {
    phoneContext: { handleCall, handleHang },
  } = useContext(Context);

  return (
    <>
      <a href="#" className="call" onClick={handleCall}>
        Call
      </a>
      <a href="#" className="hang active" onClick={handleHang}>
        Hang
      </a>
    </>
  );
}
