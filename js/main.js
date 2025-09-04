async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getChefBirthday = async (id) => {
    // const recipe = await fetchJson(`https://dummyjson.com/users/${userId}`);
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    console.log(recipe);
}

// TEST
console.log(getChefBirthday(1))