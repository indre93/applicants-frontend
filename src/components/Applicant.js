import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

// Applicant component is responsible for rendering applicant's properties
const Applicant = ({ applicant }) => {
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/applicants/${applicant.id}`, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <tr>
      <td>{applicant.firstName}</td>
      <td>{applicant.lastName}</td>
      <td>{applicant.occupation}</td>
      <td>{applicant.ssn}</td>
      <td>
        <Link to={`edit/${applicant.id}`}>
          <Button variant="secondary">
            Edit
          </Button>
        </Link>
      </td>
      <td>
        <Button onClick={handleClick} variant="danger" >Remove</Button>
      </td>
    </tr>
  );
};

export default Applicant;
