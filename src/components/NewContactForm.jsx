import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewContactForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <Field
            name="phone"
            component="input"
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={this.props.toggle}
        >
          Submit
        </button>{' '}
        <button className="btn btn-dark" onClick={this.props.toggle}>
          Cancel
        </button>
      </form>
    );
  }
}

NewContactForm = reduxForm({ form: 'new_contact_form' })(NewContactForm);
export default NewContactForm;
