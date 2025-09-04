async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getChefBirthday = async (id) => {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const userId = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);
    return userId.birthDate;
}

// TEST
console.log(getChefBirthday(1))