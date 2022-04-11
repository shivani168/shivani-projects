import React from "react";
import AppBar from "@material-ui/core/AppBar";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppBar
          style={{
            backgroundColor: "#893333",
            height: "9vh",
            position: "fixed",
            top: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "3vh",
              justifyContent: "center",
            }}
          >
            <text>"May the force be with you" ~Star Wars</text>
          </div>
        </AppBar>
      </div>
    );
  }
}
