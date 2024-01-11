import React from "react";
import CopyGeneration from "../components/CopyGeneration";

const editor = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Copy generation</h2>
        <h2>Welcome Back, Amit</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <CopyGeneration />
        </div>
      </div>
    </div>
  );
};

export default editor;
