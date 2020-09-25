import React, {useState, useEffect} from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import axios from "axios";
import {Link} from "react-router-dom";


const Departments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {

    axios
      .get("api/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((err) => {
        alert("error");
      });
  },[]);
const renderDepartments = () => {
  if (departments.length <=0) return <h2>No departments</h2>;

  return departments.map((department) => (
    <Card key={department.id}>
      <Card.Content>
        <Card.Header>{department.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Button as={Link} to={`/departments/${department.id}`}>View Items</Button>
      </Card.Content>
    </Card>
  ))
}
return(
<div>
  <Header >Departments</Header>
  <Button as={Link} color='green' to="/departments/new">Add Department</Button>
  <Card.Group>
    {renderDepartments()}
  </Card.Group>

</div>


)};

export default Departments;
