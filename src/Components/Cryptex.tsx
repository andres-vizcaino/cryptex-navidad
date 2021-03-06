import { useState } from "react";
import Column from "./Column";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  config: {
    start: number[];
    cols: number;
    rows: number;
    codeWin: string;
  };
  confetti(): void;
}

const Cryptex = ({
  config: { start, cols, rows, codeWin },
  confetti,
}: Props) => {
  //   const [code, setCode] = useState<number[]>(start);
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const notify = () =>
    toast("Eres un ganador!! Felicidades!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyBad = () =>
    toast.error("Jaja sigue intentando...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const probarCode = async () => {
    let gano = true;
    console.log(code);

    code.forEach((chart, index) => {
      if (chart === codeWin[index]) {
      } else {
        gano = false;
      }
    });

    if (gano) {
      confetti();
      notify();
    } else {
      notifyBad();
    }
  };

  const update = (index: number, val: string) => {
    setCode(code.map((item, i) => (index === i ? val : item)));
  };

  const createCols = () => {
    const items = [];
    for (let i = 0; i < codeWin.length; i++) {
      items.push(
        <Column rows={rows} update={(val) => update(i, val)} key={i} />
      );
    }
    return items;
  };

  return (
    <div className="relative">
      <div
        className="absolute w-0 h-0 top-7 -left-4"
        style={{ ...styles.triangleLeft, top: 30 * rows }}
      ></div>
      <div className="flex bg-blue-500 overflow-hidden p-1 rounded my-5">
        {createCols()}
      </div>
      <div
        className="absolute w-0 h-0 top-7 -right-4 "
        style={{ ...styles.triangleRight, top: 30 * rows }}
      ></div>

      <div className="flex space-x-5">
        <button
          onClick={probarCode}
          className="mt-3 p-2 bg-blue-500 text-purple-50 rounded-lg"
        >
          Probar codigo
        </button>
      </div>
    </div>
  );
};

const styles = {
  triangleLeft: {
    borderTop: "12px solid transparent",
    borderBottom: "12px solid transparent",
    borderRight: "12px solid rgba(59, 130, 246, var(--tw-bg-opacity)",
  },
  triangleRight: {
    borderTop: "12px solid transparent",
    borderBottom: "12px solid transparent",
    borderLeft: "12px solid rgba(59, 130, 246, var(--tw-bg-opacity)",
  },
};

export default Cryptex;
