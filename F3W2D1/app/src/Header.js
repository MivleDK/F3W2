import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <ul className="header">
                <li>
                    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="selected" to="/Ex1">EX-1</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="selected" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="selected" to="/dashboard">Dashboard</NavLink>
                </li>
            </ul>

            <hr />
        </div>
    );
}
