import React, { useEffect, useRef } from "react";
import "../Films/Films.css";

export default function MiddleContent(props) {
  const [state, setState] = React.useState({});

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "12vh",
        padding: "25px",
      }}
    >
      <div
        style={{
          textAlign: "justify",
          width: "100%",
        }}
      >
        <text
          style={{
            letterSpacing: "0.2px",
          }}
        >
          Star Wars is an American epic space-opera multimedia franchise
          created by George Lucas, which began with the eponymous 1977 film
          and quickly became a worldwide pop-culture phenomenon. The franchise
          has been expanded into various films and other media, including
          television series, video games, novels, comic books, theme park
          attractions, and themed areas, comprising an all-encompassing
          fictional universe.[c] In 2020, its total value was estimated at US$70
          billion, and it is currently the fifth-highest-grossing media
          franchise of all time. The original film (Star Wars), retroactively
          subtitled Episode IV: A New Hope (1977), was followed by the sequels
          Episode V: The Empire Strikes Back (1980) and Episode VI: Return of
          the Jedi (1983), forming the original Star Wars trilogy. Lucas later
          returned to the series to direct a prequel trilogy, consisting of
          Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones
          (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas
          sold his production company to Disney, relinquishing his ownership of
          the franchise. This led to a sequel trilogy, consisting of Episode
          VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and
          Episode IX: The Rise of Skywalker (2019).
        </text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "5vh",
        }}
      >
        <div
          style={{
            width: "28%",
          }}
        >
          <img
            src="/assets/images/starwarsposter1.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div
          style={{
            width: "31%",
          }}
        >
          <img
            src="/assets/images/starwarsposter4.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div
          style={{
            width: "28%",
          }}
        >
          <img
            src="/assets/images/starwarsposter2.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
