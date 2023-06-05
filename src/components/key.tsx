export type PropsType = {
  number: string;
};

type Props = {
  number: string;
  handleKeyPress: (number: string) => void;
  disabled: boolean;
};

export function Key({ number, handleKeyPress, disabled }: Props) {
  return (
    <li>
      <button
        className="key"
        onClick={() => handleKeyPress(number)}
        disabled={disabled}
      >
        {number}
      </button>
    </li>
  );
}
