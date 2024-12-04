import React from "react";

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto shadow-md">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
