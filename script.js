let big = document.querySelector(".big")
big.addEventListener('submit', function (e) {
    e.preventDefault()
    let name = document.querySelector(".name").value
    let body = document.querySelector(".lastName").value

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            return response.json()})
        .then(function (data) {
            let end = document.querySelector(".end")
            end.innerHTML = `
            <p>Mening ismim ${name}</p>
            <p>Mening familyam ${body}</p>
            `
        })

})

