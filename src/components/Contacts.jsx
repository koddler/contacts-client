import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './contacts.css';
import AddNewGroupModal from './AddNewGroupModal';
import AddNewContactModal from './AddNewContactModal';
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
    this.editGroup = this.editGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.editContact = this.editContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
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

  editGroup(group) {
    console.log('Editing group: ', group.name);
  }

  deleteGroup(group) {
    console.log('Deleting group: ', group.name);
  }

  editContact(contact) {
    console.log('Editing contact: ', contact.name);
  }

  deleteContact(contact) {
    console.log('Deleting contact: ', contact.name);
  }

  render() {
    const detailsStyle = { marginLeft: 15, paddingTop: 10 };
    const deleteIconStyle = { marginLeft: 5 };
    const addNewButtonStyle = { marginTop: 5 };

    const { groups } = this.props;
    const { contacts, contactDetails } = this.state;

    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Contacts</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="row">
              <div className="col-sm-8">
                <h3>Groups</h3>
              </div>
              <div className="col-sm-4">
                <span className="float-right" style={addNewButtonStyle}>
                  <AddNewGroupModal />
                </span>
              </div>
            </div>
            <ul className="list-group">
              {groups.map(group => (
                <li
                  key={group.groupId}
                  onClick={() => this.setContacts(group.contacts)}
                  className="list-group-item list-group-item-action"
                >
                  {group.name}
                  <span className="float-right" style={deleteIconStyle}>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => this.deleteGroup(group)}
                    />
                  </span>
                  <span className="float-right">
                    <i
                      className="far fa-edit"
                      onClick={() => this.editGroup(group)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm">
            <div className="row">
              <div className="col-sm-8">
                <h3>Contacts</h3>
              </div>
              <div className="col-sm-4">
                <span className="float-right" style={addNewButtonStyle}>
                  <AddNewContactModal />
                </span>
              </div>
            </div>
            <ul className="list-group">
              {contacts.map(contact => (
                <li
                  key={contact.contactId}
                  onClick={() => this.setDetails(contact)}
                  className="list-group-item list-group-item-action"
                >
                  {contact.name}
                  <span className="float-right" style={deleteIconStyle}>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => this.deleteContact(contact)}
                    />
                  </span>
                  <span className="float-right">
                    <i
                      className="far fa-edit"
                      onClick={() => this.editContact(contact)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm mx-auto">
            <h3>Contact Details</h3>
            <div className="border">
              <p style={detailsStyle}>{contactDetails.name}</p>
              <p style={detailsStyle}>{contactDetails.phone}</p>
              <p style={detailsStyle}>{contactDetails.email}</p>
            </div>
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
