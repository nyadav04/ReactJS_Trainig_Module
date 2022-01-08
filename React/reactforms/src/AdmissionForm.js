import React from "react";
import './AdmissionForm.css';
import { Component } from "react";

class AdmissionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studName:'',
            emailId: '',
            dob: '',
            gender: 'select',
            phoneNumber: '',
            city: 'select',
            formErrors: {}
        };
        this.initialState = this.state;
    }

    handleFormValidation(){
        const {studName, emailId, dob, gender, phoneNumber, city} = this.state;
        let formErrors = {};
        let formIsValid = true;

        //Student Name
        if(!studName) {
            formIsValid = false;
            formErrors["studNameErr"] = "Name is required";
        }

        //Email
        if(!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required";
        }

        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))){

            formIsValid = false;
            formErrors["emailIdErr"] = "Invalid email id";
        }

        //Date of birth
        if(!dob) {
            formIsValid = false;
            formErrors["dobErr"] = "Date of birth is required";
        }
        else {
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
            if (!pattern.test(dob)){
                formIsValid = false;
                formErrors["dobErr"] = "Invalid data of birth";
            }
        }

        //Gender
        if(gender === '' || gender ==="select") {
            formIsValid = false;
            formErrors["genderErr"] = "Select gender";
        }

        //Phone Number
        if(!phoneNumber) {
            formIsValid = false;
            formErrors["phoneNumberErr"] = "Phone number is required";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(phoneNumber)){
                formIsValid = false;
                formErrors["phoneNumberErr"] = "Invalid phone number";
            }
        }

        //City

        if (city === '' || city === "select"){
            formIsValid = false;
            formErrors["cityErr"] = "Select City";
        }

        this.setState({ formErrors: formErrors});
        return formIsValid;
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.handleFormValidation()) {
            alert('You have been successfully registered')
            this.setState(this.initialState)
        }
    }

    render() {
        const {studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, cityErr} = this.state.formErrors;

        return (
            <div className="formDiv">
                <h3 style={{ textAlign: "center"}}> Student Admission Form</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="studName">Name</label>
                            <input type="text" name="studName"
                                value={this.state.studName}
                                onChange={this.handleChange}
                                placeholder="Full Name"
                                className={studNameErr ? ' showError' : ''} />
                            {studNameErr &&
                                <div style={{ color: "red", paddingBottom: 10}}>{studNameErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" onChange={this.handleChange}
                                className={genderErr ? ' showError ' : ''}
                                value={this.state.gender} >
                                    <option value="select">--Select--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Other</option>
                                </select>
                                {genderErr &&
                                    <div style={{ color: "red", paddingBottom: 10}}>{genderErr}</div>
                                }
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" name="studName"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                placeholder="Your Phone Number"
                                className={phoneNumberErr ? ' showError' : ''} />
                            {phoneNumberErr &&
                                <div style={{ color: "red", paddingBottom: 10}}>{phoneNumberErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <select name="city" 
                                onChange={this.handleChange}
                                className={cityErr ? ' showError ' : ''}
                                value={this.state.city} >
                                    <option value="select">--Select--</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Gurugram">Gurugram</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                </select>
                                {cityErr &&
                                    <div style={{ color: "red", paddingBottom: 10}}>{cityErr}</div>
                                }
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdmissionForm;