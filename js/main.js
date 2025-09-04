function lanciaDado() {
    return new Promise((resolve, reject) => {
        const incanstro = Math.round(Math.random() * 4)
        console.log('Sta lanciando il dado...')

        setTimeout(() => {
            if (incanstro > 0) {
                const dado = Math.round(Math.random() * 5) + 1;
                resolve(`È uscito il numero ${dado}`)
            } else {
                reject('Il dado si è incastrato')
            }
        }, 4000);
    })
}

lanciaDado()
    .then(risultato => console.log(risultato))
    .catch(error => console.error(error))