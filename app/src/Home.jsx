import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Result from "./pages/Result";
const AddLanguages = lazy(() => import("./pages/AddLanguages"));
import NotfoundPage from "./pages/Notfoundpage";
function Loading() {
  return <p>Loading ...</p>;
}
function Home() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [mapData, setMapData] = useState(getFromLocal());
  useEffect(() => {
    saveToLocal(mapData);
  }, [mapData]);
  function handleAddDiv(formData) {
    setIsShowForm(false);
    const data = {
      languageName: formData.languageName,
      founder: formData.founder,
      year: formData.year,
      difficulty: formData.difficulty,
    };
    const newData = [...mapData, data];
    setMapData(newData);

    //saveToLocal("programmingLanguages", newData);
  }

  function saveToLocal(data) {
    localStorage.setItem("ProgrammingLanguages", JSON.stringify(data));
  }
  function getFromLocal() {
    const savedData = localStorage.getItem("ProgrammingLanguages");
    if (savedData) {
      const storedLanguages = JSON.parse(savedData);
      return storedLanguages;
    }
    return [];
  }
  return (
    <div>
      <div className="header">
        <div>
          <h1>Find My Programming Language</h1>
        </div>
      </div>
      <div className="headernav">
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Result formData={mapData} />} />
              <Route
                path="/AddLanguages"
                element={
                  <AddLanguages addDiv={(formData) => handleAddDiv(formData)} />
                }
              />
              <Route path="*" element={<NotfoundPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </div>
  );
}
export default Home;
