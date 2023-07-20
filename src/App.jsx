import "../src/layout/App.css";
import Jedi from "./components/Jedi";
function App() {
  return (
    <div className="App">
      <div className="">
          <Jedi name="bombom" power="3"/>
          <Jedi name="skyWalker" power="4"/>
          <Jedi name="Brono" power="2"/>

      </div>
    </div>
  );
}

export default App;
