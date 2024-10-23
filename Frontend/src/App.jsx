import React from "react";
import First from "./First/First"; /*home page*/
import Signup from './components/Signup'
import Course from "./courses/Courses";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
