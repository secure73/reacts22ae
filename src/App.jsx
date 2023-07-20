import "../src/layout/App.css";
import Majic from "./components/Majic";
import Addf from "./components/Addf";
function App() {
  return (
    <div className="App">
      <div className="">
        <Majic magicName="Fire" description="Asroc hat das" />
        <Majic magicName="ice" />
        <Majic magicName="wind" />
        <Majic magicName="disappear" />
        <Majic magicName="teleport" description="nicht für allem!" />
      </div>
    </div>
  );
}

export default App;
