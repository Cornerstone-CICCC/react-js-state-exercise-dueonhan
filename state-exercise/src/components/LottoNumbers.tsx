import { useState } from "react";

function LottoNumbers() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = () => {
    const arr = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 50) + 1
    );
    setNumbers(arr);
  };

  return (
    <div>
      <button onClick={generateNumbers}>Generate Lotto Numbers</button>
      <div>{numbers.join(", ")}</div>
    </div>
  );
}

export default LottoNumbers;
