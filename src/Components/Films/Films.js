import React, { useEffect, useRef } from "react";
import "../Films/Films.css";

export default function Films(props) {
  const [state, setState] = React.useState({
    filmData: [],
  });

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetch(props.filmsUrl);
      const filmDataResult = await response.json();
      setState({
        ...state,
        filmData: filmDataResult,
      });
    };
    fetchFilms();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <text
          style={{
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "0.5px",
          }}
        >
          {state.filmData.title}
        </text>
      </div>
      <div
        style={{
          borderBottom: "1px solid gray",
          opacity: "0.2",
          marginTop: "5px",
          marginBlock: "5px",
        }}
      ></div>
    </div>
  );
}
