"use client";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [variant, setVariant] = useState("default");
  const [text, setText] = useState("");
  const [size, setSize] = useState(24);

  return (
    <CursorContext.Provider
      value={{ variant, setVariant, text, setText, size, setSize }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);