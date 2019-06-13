import React, { PureComponent } from 'react';

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

  fakeGroups = [
    {
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
    },
    {
      groupId: 2,
      name: 'Home',
      contacts: [
        {
          contactId: 1,
          name: 'Mamun',
          phone: '01234567890',
          email: 'mamun@gmail.com',
          groupId: 2
        },
        {
          contactId: 2,
          name: 'Mahmud',
          phone: '01678034104',
          email: 'shaphil.mahmud@gmail.com',
          groupId: 2
        },
        {
          contactId: 3,
          name: 'Maruf',
          phone: '01676123456',
          email: 'maruf@gmail.com',
          groupId: 2
        },
        {
          contactId: 4,
          name: 'Mashruf',
          phone: '01911456789',
          email: 'mashruf@gmail.com',
          groupId: 2
        }
      ]
    }
  ];

  componentDidMount() {
    this.setState({ groups: this.fakeGroups });
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
              {this.state.groups.map(group => (
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

export default Contacts;
