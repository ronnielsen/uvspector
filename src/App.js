import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
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
    <HashRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/search/" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
