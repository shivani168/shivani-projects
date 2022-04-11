import React, { useEffect, useRef } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Loader from "../Loader/Loader";
import "../Characters/CharacterList.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CharacterCard from "../CharacterCard/CharacterCard";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  paperlogin: {
    background: "white",
    padding: theme.spacing(2, 2, 3),
  },
  papersignup: {
    background: "white",
    padding: theme.spacing(2, 2, 3),
  },
  text: {
    color: "white",
  },
}));

export default function CharacterList(props) {
  const classes = useStyles();

  var favouriteValues = localStorage.getItem("favourites");
  const splitArrfavouriteValues =
    favouriteValues != undefined ? favouriteValues.split(",") : [];

  const [state, setState] = React.useState({
    characterData: [],
    loading: false,
    favourite: splitArrfavouriteValues,
    prev: "",
    next: "",
    totalCount: 0,
    prevShow: false,
    nextShow: true,
    characterModal: false,
    cardValueUrl: "",
  });

  const openCharacterModal = (url) => {
    setState({
      ...state,
      cardValueUrl: url,
      characterModal: true,
    });
  };
  const closeCharacterModal = () => {
    setState({
      ...state,
      characterModal: false,
    });
  };

  const updateLoading = (val) => {
    setState({
      ...state,
      loading: val,
    });
  };

  const addFavourite = (val) => {
    var setValue = [];
    if (state.favourite.includes(val) == true) {
      setValue = state.favourite.filter((x) => {
        return x != val;
      });
    } else {
      setValue = state.favourite.concat(val);
    }
    setState((prevState) => ({
      favourite: setValue,
      characterData: prevState.characterData,
    }));
    localStorage.setItem("favourites", setValue);
  };

  var valueExists = localStorage.getItem("favourites");

  useEffect(() => {
    updateLoading(true);
    const fetchCharacters = async () => {
      const response = await fetch("https://swapi.dev/api/people/");
      const characterResult = await response.json();
      updateLoading(false);
      setState({
        ...state,
        totalCount: characterResult.count,
        prev: characterResult.previous,
        next: characterResult.next,
        prevShow: characterResult.previous == null ? false : true,
        nextShow: characterResult.next == null ? false : true,
        characterData: characterResult.results,
      });
    };
    fetchCharacters();
  }, []);

  const callPrevNext = (url) => {
    updateLoading(true);
    const fetchCharacters = async () => {
      const response = await fetch(url);
      const characterResult = await response.json();
      updateLoading(false);
      setState({
        ...state,
        totalCount: characterResult.count,
        prev: characterResult.previous,
        next: characterResult.next,
        prevShow: characterResult.previous == null ? false : true,
        nextShow: characterResult.next == null ? false : true,
        characterData: characterResult.results,
      });
    };
    fetchCharacters();
  };

  let useCharacters = "";
  if (
    state.characterData != undefined &&
    state.characterData != null &&
    state.characterData != [] &&
    state.characterData.length != 0
  ) {
    useCharacters = state.characterData.map((characters) => {
      return (
        <div
          style={{
            height: "auto",
            width: "55vw",
            background: "rgb(241, 241, 241)",
            marginTop: "1.5%",
            marginBottom: "1.5%",
            padding: "15px",
            boxShadow: "0px 3px 10px 2px #d2d7d3",
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
                width: "24%",
              }}
            >
              <div>
                <text className="table-content-heading">Name</text>
              </div>
              <div>
                <text className="table-content-value"> {characters.name}</text>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
              }}
            >
              <div>
                <text className="table-content-heading">Height</text>
              </div>
              <div>
                <text className="table-content-value">
                  {" "}
                  {characters.height}
                </text>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
              }}
            >
              <div>
                <text className="table-content-heading">Weight</text>
              </div>
              <div>
                <text className="table-content-value"> {characters.mass}</text>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
              }}
            >
              <div>
                <text className="table-content-heading">Gender</text>
              </div>
              <div>
                <text
                  style={{
                    textTransform: "capitalize",
                  }}
                  className="table-content-value"
                >
                  {" "}
                  {characters.gender}
                </text>
              </div>
            </div>
            <div
              style={{
                width: "10%",
              }}
            >
              <div
                style={{
                  border: "1px solid #893333",
                  padding: "5px",
                  borderRadius: "5px",
                  opacity: "0.7",
                  cursor: "pointer",
                }}
                className="character-list-view-button"
                onClick={() => {
                  openCharacterModal(characters.url);
                }}
              >
                <text
                  style={{
                    letterSpacing: "0.2px",
                  }}
                >
                  View
                </text>
              </div>
            </div>
            <div
              style={{
                display:
                  splitArrfavouriteValues != undefined &&
                  splitArrfavouriteValues.includes(characters.name) === false
                    ? "flex"
                    : "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                addFavourite(characters.name);
              }}
            >
              <StarBorderIcon />
            </div>
            <div
              style={{
                display:
                  splitArrfavouriteValues != undefined &&
                  splitArrfavouriteValues.includes(characters.name) === true
                    ? "flex"
                    : "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                addFavourite(characters.name);
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
      );
    });
  }

  return (
    <div>
      <Backdrop
        style={{
          zIndex: "1",
          color: "#fff",
        }}
        open={state.loading}
      >
        <Loader
          color="inherit"
          style={{
            marginLeft: "10%",
            marginTop: "5%",
          }}
        />
      </Backdrop>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <div>
          <text
            style={{
              color: "#893333",
              fontSize: "25px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Characters
          </text>
        </div>
        <div>{useCharacters}</div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              pointerEvents: state.prevShow === true ? "auto" : "none",
            }}
            onClick={() => {
              callPrevNext(state.prev);
            }}
            className="prev-next-button-div"
          >
            Prev
          </div>
          <div
            onClick={() => {
              callPrevNext(state.next);
            }}
            style={{
              marginLeft: "50%",
              pointerEvents: state.nextShow === true ? "auto" : "none",
            }}
            className="prev-next-button-div"
          >
            Next
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state.characterModal}
        onClose={closeCharacterModal}
        BackdropComponent={Backdrop}
        disableBackdropClick="true"
        className={classes.modal}
      >
        <Fade in={state.characterModal}>
          <div className={classes.papersignup}>
            <CharacterCard
              cardValueUrl={state.cardValueUrl}
              handleClose={closeCharacterModal}
              valueExists={valueExists}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
