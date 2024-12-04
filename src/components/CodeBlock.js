import React from "react";

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-gray-800 text-green-400 text-sm p-4 rounded-md overflow-x-auto shadow-md">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
