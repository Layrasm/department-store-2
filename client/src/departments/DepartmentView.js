import React, { useState, useEffect } from "react";
import Axios from "axios";
import ItemsForm from "../items/ItemsForm";
import {Button, Header, Segment} from "semantic-ui-react";
 
 


const DepartmentView = ({match, history}) => {
  const [department, setDepartment] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios
      .get(`/departments/${match.params.id}`)
      .then((res) => {
        setDepartment(res.data);
      })
      .catch((err) => {

      }); 
      Axios
        .get(`api/departments/${match.params.id}/items`)
        .then((res) => {
            setItems(res.data);
        })
        .catch((err) => {
          alert("item failed");
        });
  }, []);

  return(
    <div>
    <Segment>
      <Header>{department.name}</Header>
      {items.map((r) => (
          <p key={r.id}{r.name}></p>
      ))}
    </Segment>

    </div>
  );

};


export default DepartmentView;