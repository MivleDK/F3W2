import logo from './logo.svg';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import person, {males,females} from "./file2";
import { WelcomePerson } from './file3';
import {MultiWelcome} from "./file3";
import {persons} from "./file2";

const {firstName,email} = person;
const list = [...males, ...females];
console.log(list);
const list2 = [...males, "Kurt", "Helle", ...females];
console.log(list2);
const personV2 = [{ ...person, friends: list, phone: "123456" }];
console.log(personV2);


function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>
      <h2>Ex 2</h2>
      <p>Firstname: {firstName}<br/>Email: {email}</p>
      <h2>Ex 3</h2>
        <MultiWelcome/>
      
      <h2>Ex 3b</h2>
      <WelcomePerson person={persons[0]}/>
      <WelcomePerson person={persons[1]}/>
      <WelcomePerson person={persons[2]}/>
    </div>
  );
}

export default App;
