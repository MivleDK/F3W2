import React, { useState, useEffect } from 'react';

const GetDadJoke = () => {
    //const [joke, setJoke] = useState("");
    const [timeJoke, setTimeJoke] = useState({ title: "" });
    //const [jokeSelector, setJokeSelector] = useState(false);

    function fetchJoke(method, body) {
        const options = makeOptions(method, body);
        console.log("Fetching")
        fetch('https://icanhazdadjoke.com/', options)
            .then(res => res.json())
            .then(timeJoke => setTimeJoke(timeJoke))
            .catch(err => console.log("Oops Joke Error!" + err))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchJoke();
        }, 20000)
        return () => {
            clearInterval(interval)
            alert('Hov, du er på  vej væk')
        }
    }, [])

    return (
        <div>
            <p>Joke will show up below:</p>
            <p>{timeJoke.joke}</p>
        </div>
    );
}

function makeOptions(method, body) {
    method = method ? method : 'GET';
    const opts = {
        method: method,
        headers: {
            // "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

export default GetDadJoke;