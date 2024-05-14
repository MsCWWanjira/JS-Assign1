function isPasswordStrong(password, commonWords = []) {
    // Check if password is empty
    if (!password.trim()) {
        return false;
    }
    // Check for repeated characters in a row
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return false;
        }
    }
    // Check against common words
    const lowerCasePassword = password.toLowerCase();
    for (const word of commonWords) {
        if (lowerCasePassword === word.toLowerCase()) {
            return false;
        }
    }
    return true;
}
// Example:
const password = "P@ssw0rd"; // Example password
const commonWords = ["password", "123456", "qwerty"]; // List of common words
if (isPasswordStrong(password, commonWords)) {
    console.log("Password is strong!");
} else {
    console.log("Password is not strong.");
}