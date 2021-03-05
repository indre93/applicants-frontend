import React from 'react';

// Applicant component is responsible for rendering applicant's properties
const Applicant = (props) => {
  return (
    <tr>
      <td>{props.applicant.firstName}</td>
      <td>{props.applicant.lastName}</td>
      <td>{props.applicant.occupation}</td>
      <td>{props.applicant.ssn}</td>
    </tr>
  );
};

export default Applicant;
