import React, { PureComponent } from 'react';

class Contacts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
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

  fakeGroup = {
    groupId: 1,
    name: 'Default',
    contacts: [
      {
        contactId: 1,
        name: 'Shaphil',
        phone: '01911281911',
        email: 'shaphil2025@gmail.com',
        groupId: 1
      },
      {
        contactId: 2,
        name: 'Mahmud',
        phone: '01678034104',
        email: 'shaphil.mahmud@gmail.com',
        groupId: 1
      }
    ]
  };

  setContacts(contacts) {
    this.setState({ contacts: contacts });
  }

  setDetails(details) {
    this.setState({ contactDetails: details });
  }

  render() {
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
              <li
                onClick={() => this.setContacts(this.fakeGroup.contacts)}
                className="list-group-item list-group-item-action"
              >
                {this.fakeGroup.name}
              </li>
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
            <p>{this.state.contactDetails.name}</p>
            <p>{this.state.contactDetails.phone}</p>
            <p>{this.state.contactDetails.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
