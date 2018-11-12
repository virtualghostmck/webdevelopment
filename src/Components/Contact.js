import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../Context";
export default class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}{" "}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <i
                  className="fas fa-times"
                  style={{ float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email : {contact.email}</li>
                  <li className="list-group-item">Phone : {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: propTypes.object.isRequired
};
