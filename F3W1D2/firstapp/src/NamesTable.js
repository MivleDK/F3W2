import React, { Component } from 'react';
const NamesTable = (props) => {

    return (
        <table>
            <thead>
                <tr><th>Firstname</th><th>Lastname</th></tr>
            </thead>
            <tbody>
                {props.names.map((name) =>
                    <tr><td>{name.fname}</td><td>{name.lname}</td></tr>
                )}
            </tbody>
        </table>
    );
};

export default NamesTable;
