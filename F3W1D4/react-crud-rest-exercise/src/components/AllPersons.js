import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const { persons, editPerson, deletePerson } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th><th>Gender</th><th>&nbsp;</th></tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}><td style={{ fontSize: "smaller"}}>{person.id}</td><td>{person.name}</td><td>{person.age}</td><td>{person.email}</td><td>{person.gender}</td>
            <td><span style={{ fontSize: "smaller"}}>
                <a href="/#" onClick={(e) => { e.preventDefault(); editPerson(person.id) }}>(edit,&nbsp;</a>
                <a href="/#" onClick={(e) => { e.preventDefault(); deletePerson(person.id) }}>delete)</a>
              </span></td></tr>
          ))}
        </tbody>
      </table>

      {/* <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p> */}

    </div>
  )
}

AllPersons.propTypes = {
  persons: PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
