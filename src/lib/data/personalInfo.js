export const firstName = "Taaheer";
export const lastName = "Labbe";
export const fullname = firstName + ' ' + lastName;
export const birthYear = 2004;
export const birthDate = "17 September 2004";
export const heightinCm = 177.80;
export const heightinFeetInches = cmToFeetInches(heightinCm);
export const gender = "Male";
const currentYear = new Date().getFullYear();
export const age = currentYear - birthYear;
export const city = "Navi Mumbai";
export const state = "Maharashtra";
export const country = "India";
export const address = city + ", " + state + ", " + country;
export const primaryCareer = "Software Engineer";
export const secondaryCareer = "Actor"
export const ternaryCareer = "Voice Actor"
export const previewImage = "https://taaheer.github.io/og-image.png"

export const contact = [
    {type: "Location", value: address},
    {type: "Email", value: firstName + lastName + "@gmail.com"},
    {type: "GitHub", value: "https://github.com/" + firstName},
    {type: "LinkedIn", value: "https://linkedin.com/in/" + firstName + '-' + lastName},
    {type: "Website", value: "https://" + firstName + ".github.io"}
    ];

    function cmToFeetInches(cm) {
        const inches = cm / 2.54; // Convert cm to inches
        const feet = Math.floor(inches / 12); // Get the whole feet
        const remainingInches = Math.round(inches % 12); // Get the remaining inches
        return { feet, inches: remainingInches };
    }
