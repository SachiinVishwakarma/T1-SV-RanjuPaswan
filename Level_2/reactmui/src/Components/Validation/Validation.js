const validation = {


  validateTerms: (terms) => {
    if (!terms) {
       alert("Please accept the terms and conditions");
    }

    return "";
  },

   
  validatePhone: (number) => {
    if (!number.trim()) {
      return "Enter the Phone number";
    }

    

    if (!phoneRegex.test(number)) {
      return "Enter a valid 10 digit phone number";
    }

    return "";
  },


  
  validatePin: (pin) => {
    if (!pin.trim()) {
      return "Enter the PIN code";
    }

    const pinRegex = /^[1-9][0-9]{5}$/;

    if (!pinRegex.test(pin)) {
      return "Enter a valid 6 digit PIN";
    }

    return "";
  },

  validateDateOfBirth: (dob) => {
    if (!dob) {
      return "Enter the Date Birth";
    }

    return "";
  },


  
  validateAddress: (address) => {
    if (!address.trim()) {
      return "Address is required";
    }

    if (address.trim().length < 5) {
      return "Please enter a valid address";
    }

    return "";
  },


  
  validateCity: (city) => {
    if (!city.trim()) {
      return "City is required";
    }

    const cityRegex = /^[A-Za-z ]{2,30}$/;

    if (!cityRegex.test(city)) {
      return "Please enter a valid city";
    }

    return "";
  },


  
  validateCountry: (country) => {
    if (!country.trim()) {
      return "Please enter the all fill";
    }

    const countryRegex = /^[A-Za-z ]{2,30}$/;

    if (!countryRegex.test(country)) {
      return "Please enter a valid country";
    }

    return "";
  },



  validateGithub: (git) => {
    if (!git.trim()) {
      return "";
    }

    if (!git.includes("github.com")) {
      return "Please enter a valid Github profile";
    }

    return "";
  },


  
  validateCurrentPassword: (password) => {
    if (!password) {
      return " Enter the Current Password ";
    }

    return "";
  },

};

export default validation;