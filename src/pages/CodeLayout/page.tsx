"use client"
import Button from '@/utils/Button'
import React, { useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeLayout({ headerText = "Code Preview and Editor", code, codeString, children }) {
  const [activeButton, setActiveButton] = useState('Preview');
  const [copySuccess, setCopySuccess] = useState('Copy');
  const ref = useRef(null);

  // Check if codeString is a string, else convert it to string
  const formattedCodeString = typeof codeString === 'string' ? codeString : JSON.stringify(codeString, null, 2);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedCodeString)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess('Copy'), 1500); // Reset button text after 1.5 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="flex flex-col w-full p-4 bg-accent-50 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text-900">{headerText}</h2>
        <div className="flex space-x-2">
          <Button text='Preview' variant='default' onClick={() => { setActiveButton('Preview') }} >
			
		  </Button>
          <Button text='Code <>' variant='default' onClick={() => { setActiveButton('Code') }} />
        </div>
      </div>
      
      {/* Content Section */}
      {activeButton === 'Preview' ? (
        <div className="p-2 border-2 border-secondary-500 rounded-lg shadow-inner">
          {children}
        </div>
      ) : (
        <div className="relative p-2 border-2 border-secondary-500  rounded-lg shadow-inner">
          <SyntaxHighlighter className="scrollbar" language="tsx" style={darcula} wrapLines={true} showLineNumbers={true}>
            {formattedCodeString}
          </SyntaxHighlighter>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            {copySuccess}
          </button>
        </div>
      )}
    </div>
  )
}

export default CodeLayout
