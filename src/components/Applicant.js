import React from 'react';
import Button from 'react-bootstrap/Button';

// Applicant component is responsible for rendering applicant's properties
const Applicant = (props) => {
  return (
    <tr>
      <td>{props.applicant.firstName}</td>
      <td>{props.applicant.lastName}</td>
      <td>{props.applicant.occupation}</td>
      <td>{props.applicant.ssn}</td>
      <td><Button variant="secondary" size="sm">Update</Button></td>
      <td><Button variant="danger" size="sm">Remove</Button></td>
    </tr>
  );
};

export default Applicant;
