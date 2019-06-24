import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './contacts.css';
import AddNewGroupModal from './AddNewGroupModal';
import AddNewContactModal from './AddNewContactModal';
import EditGroupModal from './EditGroupModal';
import EditContactModal from './EditContactModal';
import { fetchGroups, removeGroup } from '../redux/actions/groupsAction';
import { removeContact } from '../redux/actions/contactsAction';

class Contacts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      contacts: [],
      contactDetails: {
        name: 'N/A',
        phone: 'N/A',
        email: 'N/A',
        avatar:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      },
      isGroupSelected: false,
      selectedGroup: 0
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

  setContacts(group) {
    if (group.contacts != null) this.setState({ contacts: group.contacts });

    this.setState({
      isGroupSelected: true,
      selectedGroup: group.groupId
    });
  }

  setDetails(details) {
    let contact = {};
    if (details.avatar !== null) {
      contact = {
        ...details,
        avatar: 'http://localhost:5000/' + details.avatar
      };
    }
    console.log(contact);
    this.setState({ contactDetails: contact });
  }

  editGroup(group) {
    console.log('Editing group: ', group.name);
  }

  deleteGroup(group) {
    console.log('Deleting group: ', group.name);
    this.props.removeGroup(group.groupId);
  }

  editContact(contact) {
    console.log('Editing contact: ', contact.name);
  }

  deleteContact(contact) {
    console.log('Deleting contact: ', contact.name);
    this.props.removeContact(contact.contactId);
  }

  render() {
    const detailsStyle = { marginLeft: 15, paddingTop: 10 };
    const deleteIconStyle = { marginLeft: 5 };
    const addNewButtonStyle = { marginTop: 5 };
    const imgStyle = {
      margin: 10,
      borderRadius: 50,
      width: 80,
      float: 'right'
    };

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
                  onClick={() => this.setContacts(group)}
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
                    <EditGroupModal group={group} />
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
                  {this.state.isGroupSelected ? (
                    <AddNewContactModal group={this.state.selectedGroup} />
                  ) : (
                    ''
                  )}
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
                    <EditContactModal
                      group={this.state.selectedGroup}
                      contact={contact}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm mx-auto">
            <h3>Contact Details</h3>
            <div className="border">
              <img
                style={imgStyle}
                src={contactDetails.avatar}
                alt="profile_pic"
              />
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
  { fetchGroups, removeGroup, removeContact }
)(Contacts);
