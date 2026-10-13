const commonValidation = {

  
  validateEmail: (email) => {
    if (!email.trim()) {
      return "Please enter the email address";
    }

    const emailRegex = /^[^\s@#]+@[^\s@#]+\.[^\s@#]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email";
    }

    return "";
  },


  
  validatePassword: (password) => {
    if (!password) {
      return "Enter a Password";
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }

    return "";
  },


  
  validateName: (name, fieldName) => {
    if (!name.trim()) {
      return `${fieldName} `;
    }

    const nameRegex = /^[A-Za-z ]{2,30}$/;

    if (!nameRegex.test(name)) {
      return `${fieldName} must contain only letters`;
    }

    return "";
  },


  
  validateConfirmPassword: (password, confirmPassword) => {
    if (!confirmPassword) {
      return "Confirm Password is required";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  },

  validateRequired: (value) => { 
    if (!value || !value.trim()){
       return "Please fill all fields."; 
      }
       return ""; 
      }, 
      validateCurrentPassword: (currentPassword, savedPassword) => {
         if (currentPassword !== savedPassword) {
           return "Current password is not valid.";
           }
            return ""; 
          }, 
          validateNewPassword: (newPassword) => {
             if (!newPassword) {
               return "Please enter a new password.";
               }
                if (newPassword.length < 8) {
                   return "Password must be at least 8 characters.";
                   }
                    return ""; 
                  },
               validateSamePassword: (newPassword, currentPassword) => {
                 if (newPassword === currentPassword)
     { return "New password cannot be the same as the current password."; } return ""; 
                },
               };



export default commonValidation;