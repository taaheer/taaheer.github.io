function generateEmail(){
    const name = "taaheerlabbe";
    const domain = "gmail.com";
    const anchor = `<a href="mailto:${name}@${domain}">${name}@${domain}</a>`;
    document.getElementById('email').innerHTML = anchor;
}