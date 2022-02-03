import React, { useState } from "react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      dob: "",
      gender: "select",
      phoneNumber: "",
      city: "select",
      formErrors: {},
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const { firstName, lastName } = this.state;
    let formErrors = {};
    let formIsValid = true;

    if (!firstName) {
      formIsValid = false;
      formErrors["firstNameError"] = "First Name is required.";
    }
    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameError"] = "Last Name is required.";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstNameError, lastNameError } = this.state.formErrors;
    return (
      <div className="container">
        <h1>Employee Registration Form</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="FirstName">First Name</label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                class="form-control"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="Enter First Name"
              />
              {firstNameError && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {firstNameError}
                </div>
              )}
            </div>
            <div class="form-group">
              <label for="exampleInputLastName">Last Name</label>
              <input
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}
                class="form-control"
                id="exampleInputLastName"
                placeholder="Enter Last Name"
              />
              {lastNameError && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {lastNameError}
                </div>
              )}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label for="exampleInputLastName">Gender</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label class="form-check-label" for="exampleRadios1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label class="form-check-label" for="exampleRadios1">
                  Female
                </label>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputDOB">DOB</label>
              <input
                type="date"
                id="exampleInputDOB"
                placeholder="Select DOB"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Enter Address"
              />
            </div>
            <div class="form-group">
              <label for="inputPhone">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="inputPhone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div class="form-group">
              <label for="inputFatherName">Father's Name</label>
              <input
                type="text"
                class="form-control"
                id="inputFatherName"
                placeholder="Enter Father's Name"
              />
            </div>
            <div class="form-group">
              <label for="inputQualification">
                Select Highest Qualification
              </label>
              <select id="inputQualification">
                <option value="">Select Highest Qualification</option>
                <option value="Master's">Master's</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="12th">12th</option>
                <option value="10th">10th</option>
              </select>
              <span>
                <label>Percentage attained</label>
                <input
                  type="number"
                  id="inputFatherName"
                  placeholder="Enter Percentage attained"
                />
              </span>
            </div>
            <div class="form-group">
              <label for="inputNationality">Nationality</label>
              <select id="inputNationality">
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
                <option value="Afghan">Afghan</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Armenian">Armemian</option>
              </select>
            </div>
            <div>
              <label>Declaration:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  The information i have given on this form is true and complete
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  I am eligible to work in INDIA
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
