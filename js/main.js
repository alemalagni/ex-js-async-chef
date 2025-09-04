async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getChefBirthday = async (id) => {
    let userId;
    try {
        const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
        userId = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);
    } catch (error) {
        console.error(error)
    }
    console.log('Data di nascita dello chef:', userId.birthDate);
}

// TEST
getChefBirthday(10)