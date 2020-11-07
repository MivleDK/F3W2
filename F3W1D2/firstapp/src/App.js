import logo from './logo.svg';
import './App.css';
import NamesTable from './NamesTable';
import { NamesTableClass } from './NamesTableClass';
const names = [{ 'fname': 'Anders', 'lname': 'And' }, { 'fname': 'Poul', 'lname': 'Madsen' }, { 'fname': 'Kurt', 'lname': 'Kølle' }]

function App() {

  return (
    <div className="App">

      <NamesTable names={names} test="Goddaw" />
      <NamesTableClass names={names} test="Testing testing" />
    </div>
  );
}

export default App;
