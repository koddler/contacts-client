import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import { updateContact } from '../redux/actions/contactsAction';

class EditContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  submit = values => {
    let val = {
      name: values.name ? values.name : this.props.contact.name,
      phone: values.phone ? values.phone : this.props.contact.phone,
      email: values.email ? values.email : this.props.contact.email,
      groupId: this.props.group,
      contactId: this.props.contact.contactId
    };
    console.log(val);
    this.props.updateContact(val);
  };

  render() {
    return (
      <div>
        <i className="far fa-edit" onClick={this.toggle} />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add new Contact</ModalHeader>
          <ModalBody>
            <ContactForm
              onSubmit={this.submit}
              toggle={this.toggle}
              contact={this.props.contact}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { updateContact }
)(EditContactModal);
