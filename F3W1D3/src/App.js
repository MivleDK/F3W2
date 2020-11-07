import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import GetChuckNorris from './Opg2a';
import GetDadJoke from './Opg2bc';
import AppList from './ListDemo';

function App() {
  return (
    <div className="App">
      <h2>Ex 1 a, b</h2>
      <Counter />
      <h2>Ex 1 c, d</h2>
      <CounterWithProp tal={21} value={5} />
      <h2>Ex 1 e</h2>
      <CounterWithUseEffect initValue={localStorage.getItem("count")} value={5} />
      <h2>Ex 2 a</h2>
      <GetChuckNorris />
      <h2>Ex 2 b</h2>
      <GetDadJoke />
      <h2>Ex 3</h2>
      <AppList />
    </div>
  );
}

// Ex 1 a,b
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Add one
      </button>
      <button onClick={() => setCount(count - 1)}>
        Subtract one
      </button>
    </div>
  );
}

// Ex 1 c,d
const CounterWithProp = (props) => {

  const [count, setCount] = useState(0);
  const value = props.tal + count
  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={() => setCount(count + props.value)}>
        Add {props.value}
      </button>
      <button onClick={() => setCount(count - props.value)}>
        Subtract {props.value}
      </button>
    </div>
  );
}

// Ex 1 e
const CounterWithUseEffect = (props) => {

  const [count, setCount] = useState(props.value);

  useEffect(() => {
    localStorage.setItem("count", count);
  })

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + props.value)}>
        Add {props.value}
      </button>

      <button onClick={() => setCount(count - props.value)}>
        Subtract {props.value}
      </button>
    </div>
  );
}

export default App;
