import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchGroups } from '../redux/actions/groupsAction';

class Contacts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      contacts: [],
      contactDetails: {
        name: 'N/A',
        phone: 'N/A',
        email: 'N/A'
      }
    };
    this.setContacts = this.setContacts.bind(this);
    this.setDetails = this.setDetails.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  setContacts(contacts) {
    this.setState({ contacts: contacts });
  }

  setDetails(details) {
    this.setState({ contactDetails: details });
  }

  render() {
    const spacingStyle = { marginTop: 10 };
    const detailsSpacing = { marginLeft: 15 };
    const { groups } = this.props;

    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Contacts</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <ul className="list-group">
              {groups.map(group => (
                <li
                  key={group.groupId}
                  onClick={() => this.setContacts(group.contacts)}
                  className="list-group-item list-group-item-action"
                >
                  {group.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm">
            <ul className="list-group">
              {this.state.contacts.map(contact => (
                <li
                  key={contact.contactId}
                  onClick={() => this.setDetails(contact)}
                  className="list-group-item list-group-item-action"
                >
                  {contact.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm mx-auto border">
            <h3 style={spacingStyle}>Contact Details</h3>
            <p style={detailsSpacing}>{this.state.contactDetails.name}</p>
            <p style={detailsSpacing}>{this.state.contactDetails.phone}</p>
            <p style={detailsSpacing}>{this.state.contactDetails.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groupsReducer.groups
});

export default connect(
  mapStateToProps,
  { fetchGroups }
)(Contacts);
