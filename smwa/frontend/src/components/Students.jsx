import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/StudentService';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
    <>
        <Table compact celled definition>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Registration No</Table.HeaderCell>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.HeaderCell>Course</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {students.map((stu) =>
                    <Table.Row>
                        <Table.Cell>{stu.studentId}</Table.Cell>
                        <Table.Cell>{stu.First_Name}</Table.Cell>
                        <Table.Cell>{stu.Last_Name}</Table.Cell>
                        <Table.Cell>{stu.Registration_No}</Table.Cell>
                        <Table.Cell>{stu.Email}</Table.Cell>
                        <Table.Cell>{stu.Course}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    </>
  );
};

export default Students;