import Cryptex from "./Components/Cryptex";
import { fireworks } from "./lib/fireworks";
import { ToastContainer } from "react-toastify";

function App() {
  const startConfetti = () => fireworks();

  const config = {
    cols: 5,
    rows: 3,
    start: [0, 0, 0, 0, 0],
    codeWin: import.meta.env.VITE_CODE_WIN as string,
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <h1 className="absolute top-20 text-4xl text-gray-50">
        Reto Navideño - Vizcaíno
      </h1>

      <Cryptex config={config} confetti={startConfetti} /> 
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
