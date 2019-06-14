import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class GroupForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupname">Group Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            className="form-control"
            id="groupname"
            placeholder={
              this.props.group ? this.props.group.name : 'Group Name'
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={this.props.toggle}
        >
          Submit
        </button>
      </form>
    );
  }
}

GroupForm = reduxForm({ form: 'new_group_form' })(GroupForm);
export default GroupForm;
