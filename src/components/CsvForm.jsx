import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

const UploadFile = ({
  input: { value: omitValue, ...inputProps },
  meta: omitMeta,
  ...props
}) => <input type="file" {...inputProps} {...props} />;

class CsvForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">CSV Upload</label>
          <Field
            name="file"
            component={UploadFile}
            className="form-control"
            id="image"
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={this.props.toggle}
        >
          Upload
        </button>
      </form>
    );
  }
}

CsvForm = reduxForm({ form: 'csv_upload_form' })(CsvForm);
export default CsvForm;
