import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';
import FormDemo from './FormDemo';
import ReservationForm from './FormDemoMultiple';

export default function App2() {
    return (
        <div>
            <h3>Forms and Controlled Components</h3>
            <FormDemo />
            <hr />
            <ReservationForm />
        </div>
    )
}