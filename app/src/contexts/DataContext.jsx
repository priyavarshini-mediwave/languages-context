import React, { createContext, useState } from "react";
const DataContext = createContext(undefined);
const DataDispatchContext = createContext(undefined);
function DataProvider({ children }) {
  const [data, setData] = useState([
    {
      languageName: "",
      founder: "",
      year: "",
      difficulty: "easy",
    },
  ]);
  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={setData}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}
