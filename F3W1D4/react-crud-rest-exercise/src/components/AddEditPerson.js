import React, { useState } from "react";

export default function AddEditPerson(props) {

  const [person, setPerson] = useState({ ...props.newPerson });

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setPerson({ ...person, [id]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addEditPerson(person);
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" value={person.id} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={person.name}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={person.age}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={person.email}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              onChange={handleChange}
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
              value={person.gender}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      {/* <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p> */}
    </div>
  );
}
