import React, { Component } from 'react';
import { persons } from './file2';
import PropTypes from 'prop-types';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(props) {
    return <p>Hello, {props.person.firstName} {props.person.lastName}, your email is {props.person.email}</p>;
}

// isRequired??
WelcomePerson.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
}

export function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            {persons.map((persons) => <WelcomePerson person={persons} />)}
        </div>
    );
}
