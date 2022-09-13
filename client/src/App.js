import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* components */
import Head from "./components/head/Head";

/* pages */
import Main from "./pages/main/Main";

const App = () => {
  return (
    <div className="App">
      <Head/>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main/>} exact/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;