import React, { Component } from "react";
import List from "./List.js";
import NewsletterList from "./NewsletterList";

class App extends Component {
  constructor() {
    super();
    this.state = { usersOn: true, newsletterOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, name) {
    if (name === "users") {
      this.setState({
        usersOn: true,
        newsletterOn: false
      });
      console.log(this.state.usersOn);
    } else {
      this.setState({
        usersOn: false,
        newsletterOn: true
      });
    }
  }
  render() {
    const newStyle = {
      display: "none"
    };

    const activeTab = {
      backgroundColor: "#2b419a",
      cursor: "default",
      height: "60px",
      transform: "translateY(0px)"
    };
    return (
      <main>
        <div className="tab-btns">
          <button
            style={this.state.usersOn ? activeTab : null}
            onClick={e => {
              this.handleClick(e, "users");
            }}
          >
            Users
          </button>
          <button
            style={this.state.newsletterOn ? activeTab : null}
            onClick={e => {
              this.handleClick(e, "newsletter");
            }}
          >
            Newsletter subscribers
          </button>
        </div>
        <div className="content">
          <div className="tab1">
            <h1 style={this.state.usersOn ? null : newStyle}>List of users </h1>
            <List visibility={this.state.usersOn} />
          </div>
          <div className="tab2">
            <h1 style={this.state.newsletterOn ? null : newStyle}>
              List of subscribers
            </h1>
            <NewsletterList visibility={this.state.newsletterOn} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
