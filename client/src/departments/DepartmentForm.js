import React, {useState} from 'react';
import {Form, Header} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import Axios from 'axios';


const DepartmentForm = ({history}) => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    Axios
    .post('/api/departments',{name})
    .then((res)=> {
      history.push("/departments");
    })
    .catch((err)=> {
      alert('Not accepted')
    });
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Header as='h2'>New Department</Header>
      <Form.Group>
        <Form.Input 
          label="Name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Button color="green">Submit</Form.Button>
      <Form.Button as={Link} to="/departments">Back</Form.Button>
    </Form>
  );
};



export default DepartmentForm;