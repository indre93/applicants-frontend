import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ConfirmationModal from './ConfirmationModal';

// Applicant component is responsible for rendering each applicant's properties.
const Applicant = ({ applicant, handleDelete }) => {
  // Use React state Hook to indicate if delete button has been clicked on or not.
  const [show, setShow] = React.useState(false);

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
        <Button variant="danger" onClick={() => setShow(true)}>
          Remove
        </Button>

        {/* When the show state is true a confimation modal will be displayed.*/}
        <ConfirmationModal
          show={show}
          fullname={`${applicant.firstName} ${applicant.lastName}`}
          confirmed={() => handleDelete(applicant.id)}
          onHide={() => setShow(false)}
        />
      </td>
    </tr>
  );
};

export default Applicant;
