import React, { Component } from 'react';
import './new.css'
import './App.css';

class New extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  //this.d = new Date();

  render() {
    return (
      <div>
          <form className="formCss">
            <label>
              Name:
              <input type="text" name="name" value="Full name" />
              <input type="text" name="e-mail" value="e-mail address" />
              <input type="text" name="name" value="Phone number"/>
            </label>
            <input type="submit" value="Add new" />
          </form>
</div>

    );
  }
}

export default New;
