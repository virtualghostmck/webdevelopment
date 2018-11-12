import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Kartik Hedau",
        email: "hedaukartik2009@gmail.com",
        phone: "022-28409040"
      },
      {
        id: 2,
        name: "Mayuresh Kakade",
        email: "mckakade@gmail.com",
        phone: "020-98454545"
      },
      {
        id: 3,
        name: "Rushi ghatol",
        email: "rushighatol@gmail.com",
        phone: "022-98565656"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
