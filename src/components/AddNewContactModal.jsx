import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import { addContact } from '../redux/actions/contactsAction';

class AddNewContactModal extends React.Component {
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
    let val = {};
    if (values.hasOwnProperty('file'))
      val = { ...values, file: values.file[0], groupId: this.props.group };
    else val = { ...values, groupId: this.props.group };

    console.log(val);
    this.props.addContact(val);
  };

  render() {
    return (
      <div>
        <i className="far fa-plus-square" onClick={this.toggle} />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add new Contact</ModalHeader>
          <ModalBody>
            <ContactForm onSubmit={this.submit} toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddNewContactModal);
