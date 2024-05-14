function capitalizeWords(inputString) {
    // Split the input string into words
    const words = inputString.split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a single string
    const resultString = capitalizedWords.join(" ");

    return resultString;
}
// Example:
const inputString = "hello world";
const result = capitalizeWords(inputString);
console.log("Result:", result); // Output: "Hello World"