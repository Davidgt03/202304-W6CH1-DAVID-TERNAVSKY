import {useContext} from "react"
import { Context } from "../context/context";


export type PropsType = {
  item: string;
};


export function Key({ item: number}: PropsType) {
  const {
context : {handleAddKey} = useContext(Context)

  function handleClick() {
    if (!calling) handleAddKey(number);
  }


  }
  return (
    <li>
      <button
        className="key"
        onClick={() => handleAddKey(number)}
        disabled={disabled}
      >
        {number}
      </button>
    </li>
  );
}
