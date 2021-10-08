import Cryptex from "./Components/Cryptex";

function App() {

  const config = {
    cols: 6,
    rows: 3,
    start: [0,0,0,0,0,0],
    codeWin: 'ANDRES' 
  }

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">

        <h1 className="absolute top-20 text-4xl text-gray-50">Cryptex con React + Tailwind CSS</h1>
       <Cryptex config={config} />
    </div>
  );
}

export default App;
