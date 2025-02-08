// main app terminal page, adds and exports all components to the local hosted page

// default import setup (not all of these are used at the same time because of current learning/testing)
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestPage1 from "./TestPage1";
import TestPage2 from "./TestPage2";

import OpeningTextBox_Page1 from './TestPage1';
import OpeningTextBox_Page2 from './TestPage2';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<OpeningTextBox_Page1 />} />
              <Route path="/TestPage2" element={<OpeningTextBox_Page2 />} />
          </Routes>
      </Router>
  );
}

// always export the components to the app so it can be used
export default App;