import React, { useEffect } from "react";

import { useBeforeunload } from "react-beforeunload";
import { Route, Routes, useNavigate } from "react-router-dom";

import FindJohn from "./feature/findJohn/FindJohn";
import Home from "./feature/home/Home";
import InsidePluto from "./feature/insidePluto/InsidePluto";
import Tutorial from "./feature/tutorial/Tutorial";

const App = () => {
  const navigate = useNavigate();
  useBeforeunload((e) => {
    e.preventDefault();
  });

  useEffect(() => {
    navigate("/");
  }, [useBeforeunload]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/findJohn" element={<FindJohn />} />
        <Route path="/InsidePluto" element={<InsidePluto />} />
      </Routes>
    </>
  );
};

export default App;
