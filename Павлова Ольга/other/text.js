
function text() {
    let string = document.getElementById('source').value;
    let apostroph = new Apostroph('\'', 'gm');
    let buckets = /\b\"\b/gm;
    let newString = string.replace(apostroph, '"');
    newString = newString.replace(buckets, '\'');
    document.getElementById('output').value = newString;
}
document.getElementById('source').addEventListener("keyup", text);