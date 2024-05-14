function generateSecurePassword(firstName, lastName) {
    // Extract the first 3 characters of the first name
    const firstNamePrefix = firstName.slice(0, 3);
    
    // Extract the last 3 characters of the last name
    const lastNameSuffix = lastName.slice(-3);
    

    const generatedPassword = `${firstNamePrefix}${lastNameSuffix}@2024`;
    
    return generatedPassword;
}
// Example:
const firstName = "John";
const lastName = "Doe";
const generatedPassword = generateSecurePassword(firstName, lastName);
console.log("Generated Password:", generatedPassword);