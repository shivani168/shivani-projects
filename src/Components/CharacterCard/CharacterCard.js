import React, { useEffect, useRef } from "react";
import "../CharacterCard/CharacterCard.css";
import StarIcon from "@material-ui/icons/Star";
import Films from "../Films/Films";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

export default function CharacterCard(props) {
  const [state, setState] = React.useState({
    characterData: [],
    open: false,
    basicOpen: false,
  });

  const openMovies = () => {
    setState({
      ...state,
      open: true,
    });
  };
  const closeMovies = () => {
    setState({
      ...state,
      open: false,
    });
  };
  const openBasic = () => {
    setState({
      ...state,
      basicOpen: true,
    });
  };
  const closeBasic = () => {
    setState({
      ...state,
      basicOpen: false,
    });
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(props.cardValueUrl);
      const characterResult = await response.json();
      setState({
        ...state,
        characterData: characterResult,
      });
    };
    fetchCharacter();
  }, []);

  let filmsData = [];
  if (
    state.characterData != undefined &&
    state.characterData != null &&
    state.characterData != [] &&
    state.characterData.films != undefined &&
    state.characterData.films != null &&
    state.characterData.films != [] &&
    state.characterData.films.length != 0
  ) {
    filmsData = state.characterData.films.map((films) => {
      return <Films filmsUrl={films} />;
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "30vw",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <text
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "gray",
              letterSpacing: "0.2px",
            }}
          >
            {state.characterData.name}
          </text>
        </div>
        <div
          style={{
            display:
              props.valueExists != undefined &&
              props.valueExists.includes(state.characterData.name) === true
                ? "flex"
                : "none",
            width: "30%",
          }}
        >
          <div
            style={{
              width: "85%",
            }}
          >
            <text
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.2px",
              }}
            >
              Added to Favourite
            </text>
          </div>
          <div
            style={{
              width: "15%",
              marginTop: "-2%",
            }}
          >
            <StarIcon
              style={{
                color: "#fcad03",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <text
          style={{
            fontSize: "15px",
            fontWeight: "500",
            letterSpacing: "0.2px",
          }}
        >
          Actor
        </text>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            width: "90%",
          }}
        >
          <text
            style={{
              fontSize: "16px",
              color: "gray",
              letterSpacing: "0.2px",
            }}
          >
            Movies/Shows
          </text>
        </div>
        <div
          style={{
            display: state.open === false ? "block" : "none",
            width: "10%",
            cursor: "pointer",
          }}
          onClick={() => {
            openMovies();
          }}
        >
          <ArrowDropDownIcon />
        </div>
        <div
          style={{
            display: state.open === true ? "block" : "none",
            width: "10%",
            cursor: "pointer",
          }}
          onClick={() => {
            closeMovies();
          }}
        >
          <ArrowDropUpIcon />
        </div>
      </div>
      <div
        style={{
          display: state.open === true ? "block" : "none",
          width: "100%",
          marginTop: "2%",
        }}
      >
        {filmsData}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            width: "90%",
          }}
        >
          <text
            style={{
              fontSize: "16px",
              color: "gray",
              letterSpacing: "0.2px",
            }}
          >
            Basic Details
          </text>
        </div>
        <div
          style={{
            display: state.basicOpen === false ? "block" : "none",
            width: "10%",
            cursor: "pointer",
          }}
          onClick={() => {
            openBasic();
          }}
        >
          <ArrowDropDownIcon />
        </div>
        <div
          style={{
            display: state.basicOpen === true ? "block" : "none",
            width: "10%",
            cursor: "pointer",
          }}
          onClick={() => {
            closeBasic();
          }}
        >
          <ArrowDropUpIcon />
        </div>
      </div>
      <div
        style={{
          display: state.basicOpen === true ? "flex" : "none",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-heading">
                Height
              </text>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-value">
                {state.characterData.height}
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-heading">
                Weight
              </text>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-value">
                {state.characterData.mass}
              </text>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-heading">
                Gender
              </text>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-value">
                {state.characterData.gender}
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-heading">
                Birth Year
              </text>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-value">
                {state.characterData.birth_year}
              </text>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-heading">
                Eye color
              </text>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-value">
                {state.characterData.eye_color}
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-heading">
                Hair color
              </text>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <text className="character-card-basic-details-value">
                {state.characterData.hair_color}
              </text>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #893333",
          padding: "5px",
          borderRadius: "5px",
          opacity: "0.7",
          marginTop: "12%",
          marginLeft: "75%",
          cursor: "pointer",
        }}
        onClick={props.handleClose}
      >
        <text
          style={{
            letterSpacing: "0.2px",
          }}
        >
          Dismiss
        </text>
      </div>
    </div>
  );
}
