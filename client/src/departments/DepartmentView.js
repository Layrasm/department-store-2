import React, { useState, useEffect } from "react";
import Axios from "axios";
 
 


const DepartmentView = ({match, history}) => {
  const [department, setDepartment] = useState({});

  useEffect(() => {
    Axios
      .get(`/departments/${match.params.id}`)
      .then((res) => {
        setDepartment(department)
      })
      .catch((err) => {

      });
  }, []);

  return(
    <div>
      {department.name}

    </div>
  );

};


export default DepartmentView;