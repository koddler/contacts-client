import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import GroupForm from './GroupForm';
import { addGroup } from '../redux/actions/groupsAction';

class AddNewGroupModal extends React.Component {
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
    console.log(values);
    this.props.addGroup(values);
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
          <ModalHeader toggle={this.toggle}>Add new Group</ModalHeader>
          <ModalBody>
            <GroupForm onSubmit={this.submit} toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { addGroup }
)(AddNewGroupModal);
