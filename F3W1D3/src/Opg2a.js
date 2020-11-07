import React, { useState, useEffect } from 'react';

const GetChuckNorris = () => {

    const [joke, setJoke] = useState("");
    const fetcChuckNorris = () => {
        fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => {
            setJoke(data.value);
        })
    }

    //similar to componentDidMount and componentDidUpdate:

    //loads joke first time
    useEffect(() => {
        fetcChuckNorris();
    }, []);

    return (
        <div>
            <p>{joke}</p>
            <button onClick={() => fetcChuckNorris()}>Get Chuck Norris joke</button>
        </div>
    );
}

export default GetChuckNorris;