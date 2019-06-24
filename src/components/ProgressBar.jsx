import React, { PureComponent } from 'react';
import { Progress } from 'reactstrap';
import { connect } from 'react-redux';

import { getProgress } from '../redux/actions/contactsAction';

class ProgressBar extends PureComponent {
  componentDidMount() {
    setInterval(this.props.getProgress, 1000);
  }

  render() {
    return (
      <div>
        <Progress value={this.props.progressReport.progress} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progressReport: state.contactsReducer.progressReport
});

export default connect(
  mapStateToProps,
  { getProgress }
)(ProgressBar);
