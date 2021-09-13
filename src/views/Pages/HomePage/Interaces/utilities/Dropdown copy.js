import React, { useEffect, useState, useRef } from "react";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon = [];
    const promises = new Array(20)
      .fill()
      .map((i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map((value) =>
        value
          .json()
          .then(({ name, sprites: { front_default: sprite } }) =>
            pokemon.push({ name, sprite })
          )
      );
    });
    setOptions(pokemon);
  }, []);

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
