import React from 'react';
import Table from 'react-bootstrap/Table';

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

      </tbody>
    </Table>
  );
};

export default Applicants;
