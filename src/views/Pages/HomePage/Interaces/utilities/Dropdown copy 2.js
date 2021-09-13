import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

// const GET_LOCATIONS = "https://restcountries.eu/rest/v2/name/";

// const getLocations = async (name) =>
//   axios.get(`${GET_LOCATIONS}${name || "a"}`, { params: { fields: "name" } });

const Auto = (type) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const GET_LOCATIONS = "http://127.0.0.1:3000/api/public/company/:type";
    // const GET_DESIGNATIONS = "http://127.0.0.1:3000/api/designations";

    const getLocations = async () =>
      axios.get(`${GET_LOCATIONS}${type || "all"}`);
    setOptions(getLocations);
    console.log(options);
    // const getDesignations = async () => axios.get(`${GET_DESIGNATIONS}`);
  }, [type]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = (poke) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        lineHeight: "1.5",
        padding: "0.5rem 1rem",
        fontSize: "1.09375rem",
        borderRadius: "0.3rem",
        display: "block",
        width: "100%",
        fontWeight: "400",
        backgroundClip: "padding-box",
        border: "1px solid #e4e7ea",
        outline: "none",
        color: "#5c6873",
        backgroundColor: "#fff",
        transition:
          "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      }}
    >
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder={null}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{ borderWidth: "0", border: "none" }}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                  {/* <img src={value.sprite} alt="pokemon" /> */}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Auto;
