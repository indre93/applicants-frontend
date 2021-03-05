import React from 'react';
import Table from 'react-bootstrap/Table';
import Applicant from './Applicant';

// Applicants component is responsible for rendering list of applicants
const Applicants = (props) => {
  return (
    // Import Table from react-bootstrap for readability and qucik styling
    <Table hover responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Occupation</th>
          <th>SSN</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* Use map() method to iterate through the array of objects and send each object to the Applicant component as a prop to be rendered in its own row */}
        {props.applicants.map((applicant) =>
          <Applicant key={applicant.id} applicant={applicant} />
        )}
      </tbody>
    </Table>
  );
};

export default Applicants;
