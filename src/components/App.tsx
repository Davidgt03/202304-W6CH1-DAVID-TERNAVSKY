import { Info } from "./info";
import { Keyboard } from "./keyboard";
import { Actions } from "./actions";

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
