import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Publication from "./Publications";
import People from "./People";
import ProjectMM from "./Projects_MM";
import NotAvailable from "./NotAvailable";
import JoinUs from "./JoinUs";
import Individual from "./marketing-page/components/Individual";
import ProjectCY from "./ProjectCY";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage bgColor={"#4b7d8e"}/>} />
        <Route path="/publication" element={<Publication bgColor={"#80350e"}/>} />
        {/* Dynamic route for People page */}
        <Route path="/people" element={<People bgColor={"#0b3041"}/>} />
        <Route path="/individual/:category/:id" element={<Individual />} />
        <Route path="/project/mm" element={<ProjectMM />} />
        <Route path="/project/cy" element={<ProjectCY />} />
        <Route path="/resources/demos" element={<NotAvailable />} />
        <Route path="/resources/models" element={<NotAvailable />} />
        <Route path="/resources/tools" element={<NotAvailable />} />
        <Route path="/resources/datasets" element={<NotAvailable />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
