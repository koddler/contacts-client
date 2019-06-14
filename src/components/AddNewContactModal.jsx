import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import NewContactForm from './NewContactForm';

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
    let val = { ...values, groupId: this.props.group };
    console.log(val);
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
            <NewContactForm onSubmit={this.submit} toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddNewContactModal;
