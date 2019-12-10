import React, { Component } from "react";

import NewsletterListItem from "./NewsletterListItem.js";

class NewsletterList extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: []
    };
    this.deleteRecord = this.deleteRecord.bind(this);
    // this.filterList = this.filterList.bind(this);
    // this.sortList = this.sortList.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    const baseURL = "https://form4earth-2b74.restdb.io/rest/subscribers";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de4e9004658275ac9dc2184",
      "cache-control": "no-cache"
    };
    fetch(baseURL, {
      method: "get",
      headers: headers
    })
      .then(response => response.json())
      .then(data => this.setState({ users: data, loading: false }));
  }

  deleteRecord(id) {
    fetch("https://form4earth-2b74.restdb.io/rest/subscribers/" + id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5de4e9004658275ac9dc2184",
        "cache-control": "no-cache"
      }
    })
      .then(res => res.json())
      .then(
        this.setState(prevState => {
          const updatedUsers = prevState.users.map(user => {
            if (user._id === id) {
              user.isDeleted = true;
            }
            return user;
          });
          return {
            users: updatedUsers
          };
        })
      );
  }

  //   filterList(e) {
  //     e.target.checked = true;

  //     // check which filtering option is checked
  //     const value = e.target.id;

  //     this.setState(prevState => {
  //       const filteredUsers = prevState.users.map(user => {
  //         if (value === "all") {
  //           user.isHidden = false;
  //         } else if (value === "yes") {
  //           if (user.Subscriber) {
  //             user.isHidden = false;
  //           } else {
  //             user.isHidden = true;
  //           }
  //         } else {
  //           if (!user.Subscriber) {
  //             user.isHidden = false;
  //           } else {
  //             user.isHidden = true;
  //           }
  //         }
  //         return user;
  //       });
  //       return {
  //         users: filteredUsers
  //       };
  //     });
  //   }

  //   sortList(e) {
  //     let value = e.target.value;
  //     // sorting the list that is received, before displaying it
  //     var obj = [...this.state.users];

  //     this.setState(prevState => {
  //       if (value != "none") {
  //         // sort by chosen option
  //         obj.sort((a, b) => {
  //           console.log(a, b);
  //           return a[value].localeCompare(b[value]);
  //         });
  //       }
  //       const sortedUsers = obj.map(user => {
  //         return user;
  //       });
  //       return {
  //         users: sortedUsers
  //       };
  //     });
  //   }

  render() {
    const newStyle = {
      display: "none"
    };
    const text = this.state.loading
      ? "loading..."
      : this.state.users.map(user => {
          return (
            <NewsletterListItem user={user} deleteRecord={this.deleteRecord} />
          );
        });
    return (
      <div
        className="table-users"
        style={this.props.visibility ? null : newStyle}
      >
        <table id="list">
          <thead>
            <tr className="head-row">
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{text}</tbody>
        </table>
      </div>
    );
  }
}

export default NewsletterList;
