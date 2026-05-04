// auth-utils.js

// Utility function for password validation
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) return "Password must be at least 8 characters long.";
    if (!hasUpperCase) return "Password must contain at least one uppercase letter.";
    if (!hasLowerCase) return "Password must contain at least one lowercase letter.";
    if (!hasNumbers) return "Password must contain at least one number.";
    if (!hasSpecialChars) return "Password must contain at least one special character.";
    return true;
}

// Utility function for email validation
function validateEmail(email) {
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailFormat.test(email) ? true : "Invalid email format.";
}

// Utility function for handling error messages
function getErrorMessage(validationResult) {
    return validationResult === true ? '' : validationResult;
}

module.exports = { validatePassword, validateEmail, getErrorMessage };