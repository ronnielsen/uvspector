import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './screens/Main';
import Search from './screens/Search';
import './App.css';

function MainPage() {
  return <Main />;
}

function SearchPage() {
  return <Search />;
}

function Users() {
  return <h2>Users</h2>;
}


function App() {
  return (
    <Router basename="public">
      <div>
        <Route path="/" exact component={MainPage} />
        <Route path="/search/" component={SearchPage} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default App;
