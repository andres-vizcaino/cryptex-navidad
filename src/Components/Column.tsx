import { useState } from "react";
import { ArrowDownCircle } from "../Assets/ArrowDownCircle";
import { ArrowUpCircle } from "../Assets/ArrowUpCircle";
import { itemsABC } from "../Data/ABC";

interface Props {
  update(data: string): void;
  rows: number;
}

const Column = ({ update, rows }: Props) => {
  const height = 28;
  const [items, setItems] = useState<string[]>(itemsABC);

  const shiftUp = () => {
    const copy: string[] = items.slice();
    const pop: string = copy.pop()!;
    copy.unshift(pop);
    setItems(copy);
  };

  const shiftDown = () => {
    const copy: string[] = items.slice();
    const shift: string = copy.shift()!;
    copy.push(shift);
    setItems(copy);
  };

  return (
    <>
      <div
        className="text-center grid"
        style={{
          height: height * rows + 60,
        }}
      >
        <button
          onClick={shiftUp}
          className="bg-grey-light hover:bg-grey text-grey-darkest font-bold rounded inline-flex items-center justify-self-center text-white"
        >
          {ArrowUpCircle}
        </button>
        <button
          onClick={shiftDown}
          className="bg-grey-light hover:bg-grey text-grey-darkest font-bold rounded inline-flex items-center justify-self-center text-white"
        >
          {ArrowDownCircle}
        </button>
        {items.map((item, index) => (
          <div
            key={item}
            className={`w-6 h-6 m-1 mb-1 bg-yellow-50 select-none font-bold rounded ${
              index === 1 ? "bg-green-300" : ""
            }`}
            style={{ transition: "all 0.2s ease" }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Column;
