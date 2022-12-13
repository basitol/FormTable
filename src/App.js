import SubmitFormComponent from "./SubmitFormComponent";
import Submitted from "./Submitted";
import { StudentContextProvider } from "./StudentContex";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        <Routes>
          {/* */}
          <Route path="/" element={<SubmitFormComponent />} />
          <Route path="/submitted" element={<Submitted />} />
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;
