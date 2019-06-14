import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewGroupForm extends PureComponent {
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
            placeholder="Group Name"
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

NewGroupForm = reduxForm({ form: 'new_group_form' })(NewGroupForm);
export default NewGroupForm;
