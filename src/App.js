import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ReducerMateri from "./useReducer";
import RefTutorial from "./useRef";
export default function App() {
  useEffect(() => {}, []);
  return (
    <div className="w-full h-screen bg-slate-600 text-slate-300">
        <h1 className="bg-[#13b3ac] text-slate-700">HOOK</h1>
      <RefTutorial/>
      {/* <Routes>
        <Route path="/useRef" element={<RefTutorial />} />
        <Route path="/useReducer" element={<ReducerMateri />} />
        <Route path="*" element={<Navigate to="/useRef" />} />
      </Routes> */}
    </div>
  );
}
