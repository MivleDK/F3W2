import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './Forms/App2'
import App3 from './liftingState/App3';
import reportWebVitals from './reportWebVitals';

let app = <App />

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" className="x" id="app2">Forms</a> &nbsp;
            <a href="/" className="x" id="app3">Lifting State</a> &nbsp;
            {/* Add as many as you have exercises, but remember className="x" */}
            {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if (event.target.className !== "x") {
        return
    }
    const id = event.target.id;
    switch (id) {
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
reportWebVitals();
