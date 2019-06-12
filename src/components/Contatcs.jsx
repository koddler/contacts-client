import React, { PureComponent } from 'react';

class Contacts extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Contacts</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <ul className="list-group">
              <a href="#" className="list-group-item list-group-item-action">Group 1</a>
              <a href="#" className="list-group-item list-group-item-action">Group 2</a>
              <a href="#" className="list-group-item list-group-item-action">Group 3</a>
              <a href="#" className="list-group-item list-group-item-action">Group 4</a>
              <a href="#" className="list-group-item list-group-item-action">Group 5</a>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="list-group">
              <li className="list-group-item">Contact 1</li>
              <li className="list-group-item">Contact 2</li>
              <li className="list-group-item">Contact 3</li>
              <li className="list-group-item">Contact 4</li>
              <li className="list-group-item">Contact 5</li>
            </ul>
          </div>
          <div className="col-sm border">
            Contact 1 Details

          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
