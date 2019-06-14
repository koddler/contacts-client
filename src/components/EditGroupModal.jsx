import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import GroupForm from './GroupForm';
import { updateGroup } from '../redux/actions/groupsAction';

class EditGroupModal extends React.Component {
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
    let val = { ...values, groupId: this.props.group.groupId };
    console.log(val);
    this.props.updateGroup(val);
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
          <ModalHeader toggle={this.toggle}>Edit Group</ModalHeader>
          <ModalBody>
            <GroupForm
              onSubmit={this.submit}
              toggle={this.toggle}
              group={this.props.group}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { updateGroup }
)(EditGroupModal);
