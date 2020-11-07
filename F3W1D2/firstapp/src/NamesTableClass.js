import React, { Component } from 'react';
class NamesTableClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { NamesTable: props.test }
    }

    updateState() {
        this.setState({ NamesTable: 'Changed' });
    }
    render() {
        return (
            <div>
                {this.state.NamesTable}

                <table>
                    <thead>
                        <tr><th>Firstname</th><th>Lastname</th></tr>
                    </thead>
                    <tbody>
                        {this.props.names.map((name) =>
                            <tr><td>{name.fname}</td><td>{name.lname}</td></tr>
                        )}
                    </tbody>
                </table>
                <button onClick={() => { this.updateState() }}>Update</button>
            </div>
        );
    }


}
export { NamesTableClass };