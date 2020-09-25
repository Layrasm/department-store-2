import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Departments from "./departments/Departments";
import { Container } from "semantic-ui-react";
import DepartmentForm from "./departments/DepartmentForm";
import DepartmentView from "./departments/DepartmentView";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path ="/departments/new" component={DepartmentForm}/>
          <Route exact path="/departments/:id" component={DepartmentView} />
        </Switch>
      </Container>
    </>
  );
}

export default App;