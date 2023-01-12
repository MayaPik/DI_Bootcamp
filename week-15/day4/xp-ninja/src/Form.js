import React, {useState} from "react";
import Input from "./Input";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formValid, setFormValid] = useState(false);


    const validateFirstName = (value) => {
        if (value === "") {
            setFirstNameError("First name is required.");
            setFormValid(false);

        } else {
            setFirstNameError("");
        }
    };

    const validateLastName = (value) => {
        if (value === "") {
            setLastNameError("Last name is required.");
            setFormValid(false);

        } else {
            setLastNameError("");
        }
    };

    const validatePhone = (value) => {
        if (value === "") {
            setPhoneError("Phone number is required.");
            setFormValid(false);
        } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
            setPhoneError("Invalid phone number format.");
            setFormValid(false);

        } else {
            setPhoneError("");
        }
    };

    const validateEmail = (value) => {
        if (value === "") {
            setEmailError("Email is required.");
            setFormValid(false);
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value)) {
            setEmailError("Invalid email format.");
            setFormValid(false);
        } else {
            setEmailError("");
        }
    }; 
    const validateAll = () => {
    if(firstNameError === "" && lastNameError === "" && phoneError === "" && emailError === ""){
        setFormValid(true);
    }
}
    
    return (
        <div>
        <form onChange={(e) => {
                    validateAll(e.target.value);
                }} >
            <Input
                name="First Name"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                    validateFirstName(e.target.value);
                }}
                errorMessage={firstNameError}
            />
            <Input
                name="Last Name"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                    validateLastName(e.target.value);
                }}
                errorMessage={lastNameError}
            />
            <Input
                name="Phone"
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value);
                    validatePhone(e.target.value);
                }}
                errorMessage={phoneError}
            />
            <Input
                name="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                }}
                errorMessage={emailError}
            />
        <button type="submit"disabled={!formValid}>Submit</button>
        </form>
        </div>
    )

}

export default Form;