import React from "react";

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-gray-800 text-white text-sm sm:text-md p-4 rounded-md overflow-x-auto shadow-md">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
