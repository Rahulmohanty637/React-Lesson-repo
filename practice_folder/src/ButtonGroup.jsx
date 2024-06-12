import React, { useState, useEffect, useRef } from "react";
import "./index.css"; // Ensure to import your CSS file

const scientists = [
  {
    name: "Albert Einstein",
    works: [
      "Theory of Relativity",
      "Photoelectric Effect",
      "Brownian Motion",
      "Theory of Relativity",
      "Photoelectric Effect",
      "Brownian Motion",
      "Astronomy Observations",
      "Astronomy Observations",
    ],
  },
  {
    name: "Marie Curie",
    works: [
      "Radioactivity",
      "Polonium",
      "Radium",
      "Astronomy Observations",
      "Improved Telescope",
      "Wireless Transmission",
      "Astronomy Observations",
    ],
  },
  {
    name: "Isaac Newton",
    works: [
      "Laws of Motion",
      "Universal Gravitation",
      "Calculus",
      "Theory of Relativity",
      "Photoelectric Effect",
      "Brownian Motion",
      "Astronomy Observations",
      "Astronomy Observations",
      "Improved Telescope",
      "Wireless Transmission",
      "Astronomy Observations",
      "Laws of Motion",
      "Universal Gravitation",
      "Calculus",
      "Theory of Relativity",
      "Photoelectric Effect",
      "Brownian Motion",
      "Astronomy Observations",
      "Astronomy Observations",
      "Improved Telescope",
      "Wireless Transmission",
      "Astronomy Observations",
    ],
  },
  {
    name: "Galileo Galilei",
    works: ["Kinematics", "Astronomy Observations", "Improved Telescope"],
  },
  {
    name: "Nikola Tesla",
    works: ["AC Current", "Tesla Coil", "Wireless Transmission"],
  },
];

const ButtonGroup = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const buttonGroupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      buttonGroupRef.current &&
      !buttonGroupRef.current.contains(event.target)
    ) {
      setClickedIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={buttonGroupRef}
      className="flex flex-col items-center bg-gray-100 p-4"
    >
      <div className="flex space-x-8">
        {scientists.map((scientist, index) => (
          <button
            key={index}
            className={`bg-black text-white px-4 py-2 transition-transform transform ${
              clickedIndex === index ? "scale-125" : "scale-100 blur-none"
            } ${
              clickedIndex !== null && clickedIndex !== index
                ? "blur-sm opacity-80"
                : ""
            }`}
            onClick={() => setClickedIndex(index)}
          >
            {scientist.name}
          </button>
        ))}
      </div>
      {clickedIndex !== null && (
        <div className="relative mt-40 mb-44 p-2 bg-black text-white text-center">
          <h3 className="text-md h-2">Involved In</h3>
          <div className="mt-4 text-xs flex justify-center">
            {scientists[clickedIndex].works.map((work, idx) => (
              <div
                key={idx}
                className="text-black work-item absolute"
                style={{
                  transform: `rotate(${
                    idx * (360 / scientists[clickedIndex].works.length)
                  }deg) translate(150px) rotate(-${
                    idx * (360 / scientists[clickedIndex].works.length)
                  }deg)`,
                }}
              >
                {work}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
