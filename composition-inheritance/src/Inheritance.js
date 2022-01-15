import React, { ReactDOM } from 'react';

class UserNameForm extends React.Component {
  render() {
    return (
      <div>
        <input type='text' />
      </div>
    );
  }
}
class CreateUserName extends UserNameForm {
  render() {
    const parent = super.render();
    return (
      <div>
        {parent}
        <button>Create</button>
      </div>
    );
  }
}
class UpdateUserName extends UserNameForm {
  render() {
    const parent = super.render();
    return (
      <div>
        {parent}
        <button>Update</button>
      </div>
    );
  }
}

export default class Inheritance extends React.Component {
  render() {
    return (
      <div>
        <CreateUserName />
        <UpdateUserName />
      </div>
    );
  }
}
