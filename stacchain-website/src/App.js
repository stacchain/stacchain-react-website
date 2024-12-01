import "./App.css";
import GetInvolved from "./components/GetInvolved";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SmartContractsSection from "./components/SmartContracts";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro className="text-left" />
      <SmartContractsSection className="text-left" />
      <GetInvolved className="text-left" />
    </div>
  );
}

export default App;
