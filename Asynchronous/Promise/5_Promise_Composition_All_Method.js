    const promiseValue = 100;
    const promiseResolve = Promise.resolve("Resolved");
    const promiseTimeout = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'Values');
    });

    function fetchTodos(){
        return fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json());
    }

    function fetchAlbums(){
        return fetch("https://jsonplaceholder.typicode.com/albums/1")
            .then((res) => res.json());
    }

    Promise.all([fetchTodos(), promiseValue, fetchAlbums(), promiseResolve, promiseTimeout])
    .then((res1, res2) => {
        console.log(res1, res2);
    }).catch((err) => {
        console.log(err);
    })