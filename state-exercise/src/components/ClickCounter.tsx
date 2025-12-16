type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function ClickCounter({ setCount }: Props) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Click Counter</button>
  );
}

export default ClickCounter;
