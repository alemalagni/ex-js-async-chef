async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

function getChefBirthday(id) {
    // const recipe = await ('fetch ')
}
