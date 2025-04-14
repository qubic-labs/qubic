import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import Publication from "./Publications";
import People from "./People";
import Project from "./Projects";
import NotAvailable from "./NotAvailable";
import JoinUs from "./JoinUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/people" element={<People />} />
        <Route path="/project" element={<Project />} />
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
