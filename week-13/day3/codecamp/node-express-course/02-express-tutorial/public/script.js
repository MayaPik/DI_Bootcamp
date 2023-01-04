const login = () => {
    fetch('http://localhost:5005/login').then(res => res.text().then(data => {
        console.log(data);
        document.getElementById('root').innerHTML = data

    }))
}

