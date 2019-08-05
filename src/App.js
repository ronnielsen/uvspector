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

function App() {
  return (
    <HashRouter basename="/uvspector">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
