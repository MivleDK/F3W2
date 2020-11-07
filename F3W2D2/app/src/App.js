import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams
} from "react-router-dom";
import Header from './Header';
import NoMatch from './NoMatch';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample(props) {
  return (
    <Router>
      <div>
        <Header />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products bookFacade={props.bookFacade} />
            </Route>
            <Route path="/add-book">
              <AddBook bookFacade={props.bookFacade} />
            </Route>
            <Route path="/details/:id">
              <Details bookFacade={props.bookFacade} />
            </Route>
            <Route path="/find-book">
              <FindBook bookFacade={props.bookFacade} />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Details(props) {
  let { bookId } = useParams();
  return (
    <div className="content-area">
      <b>Details:</b>
      <p>{props.bookFacade.findBook(bookId).info}</p>
    </div>
  );
}

function Products(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        {props.bookFacade.getBooks().map(element =>
          <li key={element.id}>
            <Link to={`${url}/${element.id}`}>Details</Link>&nbsp;&nbsp;
            {element.title}
          </li>)}
      </ul>
      <Switch>
        <Route exact path={path}>
          Please select a book
        </Route>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={props.bookFacade} />
        </Route>
      </Switch>
    </div>
  );
}

function AddBook(props) {
  const [book, setBook] = useState();

  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setBook({ ...book, [id]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.bookFacade.addBook(book);
  }

  return (
    <div className="content-area">
      <h2>Add book</h2>
      <form onChange={handleChange}>
        <input id="title" type="text" placeholder="Add title"></input><br></br>
        <input id="info" type="text" placeholder="Add info"></input><br></br>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}



function Company() {
  return (
    <div className="content-area">
      <h2>Company</h2>
    </div>
  );
}

function FindBook(props) {
  const [bookId, setBookId] = useState();
  const [findBookId, setFindBookId] = useState();

  const handleChange = (event) => {
    const id = event.target.value;
    setBookId(id);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFindBookId(bookId);
  }
  return (
    <div className="content-area">
      <h2>Find a book</h2>
      <form onChange={handleChange}>
        <input id="id" type="number" placeholder="Enter book ID"></input>
        <button onClick={handleSubmit}>Search</button>
      </form>

      <p>Id:&nbsp;
        {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).id}
        <br />
        Title:&nbsp;
        {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).title}
        <br />
        Info:&nbsp;
        {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).info}
      </p>

    </div>
  )

}