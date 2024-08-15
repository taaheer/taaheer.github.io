export const firstName = "Taaheer";
export const lastName = "Labbe";
export const fullname = firstName + ' ' + lastName;
export const birthYear = 2004;
export const birthDate = "17 September 2004";
export const gender = "Male";
const currentYear = new Date().getFullYear();
export const age = currentYear - birthYear;
export const city = "Navi Mumbai";
export const state = "Maharashtra";
export const country = "India";
export const address = city + ", " + state + ", " + country;
export const primaryCareer = "Software Engineer";
export const secondaryCareer = "Actor"

export const contact = [
    {type: "Location", value: address},
    {type: "Email", value: firstName + lastName + "@gmail.com"},
    {type: "GitHub", value: "https://github.com/" + firstName},
    {type: "LinkedIn", value: "https://linkedin.com/in/" + firstName + '-' + lastName},
    {type: "Website", value: "https://" + firstName + ".github.io"}
    ];
