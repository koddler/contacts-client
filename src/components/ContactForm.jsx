import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends PureComponent {
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
            placeholder={this.props.contact ? this.props.contact.name : 'Name'}
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
            placeholder={
              this.props.contact ? this.props.contact.phone : 'Phone'
            }
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
            placeholder={
              this.props.contact ? this.props.contact.email : 'Email'
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

ContactForm = reduxForm({ form: 'new_contact_form' })(ContactForm);
export default ContactForm;
