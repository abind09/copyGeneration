"use client";
import { useState, useRef } from "react";

const CustomTextEditor = () => {
  const [content, setContent] = useState("");
  const [formattingOptions, setFormattingOptions] = useState({
    bold: false,
    italic: false,
    uppercase: false,
    lowercase: false,
  });
  const [fontSize, setFontSize] = useState("16px"); // Default font size
  const contentRef = useRef(null);

  const handleChange = () => {
    setContent(contentRef.current.innerHTML);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  const handleBold = () => {
    setFormattingOptions((prevOptions) => ({
      ...prevOptions,
      bold: !prevOptions.bold,
    }));
  };

  const handleItalic = () => {
    setFormattingOptions((prevOptions) => ({
      ...prevOptions,
      italic: !prevOptions.italic,
    }));
  };

  const handleUppercase = () => {
    setFormattingOptions((prevOptions) => ({
      ...prevOptions,
      uppercase: !prevOptions.uppercase,
      lowercase: false,
    }));
  };

  const handleLowercase = () => {
    setFormattingOptions((prevOptions) => ({
      ...prevOptions,
      lowercase: !prevOptions.lowercase,
      uppercase: false,
    }));
  };

  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    document.execCommand("fontSize", false, selectedFontSize);
    setFontSize(selectedFontSize);
    handleChange();
  };

  const handleClear = () => {
    setContent("");
  };
  const getInlineStyles = () => {
    let styles = "";
    if (formattingOptions.bold) {
      styles += "font-weight: bold;";
    }
    if (formattingOptions.italic) {
      styles += "font-style: italic;";
    }
    if (formattingOptions.uppercase) {
      styles += "text-transform: uppercase;";
    }
    if (formattingOptions.lowercase) {
      styles += "text-transform: lowercase;";
    }
    return styles;
  };

  return (
    <div>
      <div
        ref={contentRef}
        contentEditable
        style={{
          border: "1px solid #ccc",
          padding: "50px",
          marginBottom: "20px",
          fontSize,
          ...(formattingOptions.uppercase && { textTransform: "uppercase" }),
          ...(formattingOptions.lowercase && { textTransform: "lowercase" }),
        }}
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        <button
          className={`${
            formattingOptions.bold ? "bg-blue-700" : "bg-blue-500"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={handleBold}
        >
          Bold
        </button>
        <button
          className={`${
            formattingOptions.italic ? "bg-yellow-700" : "bg-yellow-500"
          } hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={handleItalic}
        >
          Italic
        </button>
        <button
          className={`${
            formattingOptions.uppercase ? "bg-green-700" : "bg-green-500"
          } hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={handleUppercase}
        >
          Uppercase
        </button>
        <button
          className={`${
            formattingOptions.lowercase ? "bg-red-700" : "bg-red-500"
          } hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={handleLowercase}
        >
          Lowercase
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={handleClear}
        >
          Clear
        </button>
        <label className="mr-2">
          Font Size:
          <select
            value={fontSize}
            onChange={handleFontSizeChange}
            className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded"
          >
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            {/* Add more font size options as needed */}
          </select>
        </label>
      </div>
    </div>
  );
};

export default CustomTextEditor;
