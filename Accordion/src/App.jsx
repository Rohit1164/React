import React, { useState, useEffect } from "react";
import Quetions from "./UI/Quetions";
import accordion from "./API/Accordion.json";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [Activeid, setActiveId] = useState(null);

  useEffect(() => {
    setdata(accordion);
  }, []);

  const handleButton = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center pt-10">
        Accordion!
      </h1>
      <ol className="grid justify-center mt-10">
        {data.map((curData) => {
          return (
            <Quetions
              key={curData.id}
              curData={curData}
              isActive={Activeid === curData.id}
              ontoggle={() => handleButton(curData.id)}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
