import { Route, Routes } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Step1/>} />
        <Route path="/step2" element={<Step2/>} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4/>} />
        <Route path="/step5" element={<Step5/>} />
        <Route path="/step6" element={<Step6/>} />
        <Route path="/step7" element={<Step7/>} />
      </Routes>
    </div>
  );
}

export default App;
