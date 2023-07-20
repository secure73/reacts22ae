import "../src/layout/App.css";
import Majic from "./components/Majic";
import Addf from "./components/Addf";
function App() {
  return (
    <div className="App">
      <div className="">
        <Majic magicName="Fire" description="Asroc hat das" color="bg-red-700" />
        <Majic magicName="ice"  color="bg-blue-300"/>
        <Majic magicName="wind" color="bg-gray-300" />
        <Majic magicName="disappear"  />
        <Majic magicName="teleport" description="nicht für allem!"  color="bg-purple-800"/>
      </div>
    </div>
  );
}

export default App;
